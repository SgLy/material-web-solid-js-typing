import * as fs from 'fs';
import * as path from 'path';
import * as marked from 'marked';

import { assert, escape, format, snakeToCamel } from './utils';

import './marked-polyfill';

type Verifier = (token: marked.Token) => boolean;
type OnceFn = (predicate: Verifier) => { then(fn: ThenFn): void };
type ThenFn = (token: marked.Token, once: OnceFn, done: (doneFn: () => void) => void) => void;
const iterateTokens = (tokens: marked.TokensList, fn: (onceFn: OnceFn) => void) => {
  const callThenFn = (currentIndex: number, maxIndex: number, thenFn: ThenFn) => {
    const branches: { predicate: Verifier; processor: ThenFn }[] = [];
    let doneFn = () => {};
    thenFn(
      tokens[currentIndex],
      predicate => ({
        then(fn) {
          branches.push({ predicate, processor: fn });
        },
      }),
      fn => {
        doneFn = fn;
      },
    );
    const satisfiedIndex: [index: number, branch: number][] = [];
    for (let i = currentIndex + 1; i < maxIndex; ++i) {
      for (let j = 0; j < branches.length; ++j) {
        if (!branches[j].predicate(tokens[i])) continue;
        satisfiedIndex.push([i, j]);
        break;
      }
    }
    for (let i = 0; i < satisfiedIndex.length; ++i) {
      const [index, branch] = satisfiedIndex[i];
      const nextIndex = i + 1 < satisfiedIndex.length ? satisfiedIndex[i + 1][0] : maxIndex;
      callThenFn(index, nextIndex, branches[branch].processor);
    }
    if (typeof doneFn === 'function') doneFn();
  };

  callThenFn(-1, tokens.length, (_, onceFn) => {
    fn(onceFn);
  });
};

interface Context {
  name: string;
  tagName: string;
  file: string;
  properties: {
    name: string;
    type: string;
    defaultValue: string;
    description: string;
  }[];
  events: {
    name: string;
    type: string;
    bubbles: string;
    composed: string;
    description: string;
  }[];
  methods: {
    name: string;
    parameters: string[];
    returns: string;
    description: string;
  }[];
}

const components: Context[] = [];

const docsFolder = path.join(__dirname, '..', 'material-web', 'docs', 'components');

fs.readdirSync(docsFolder).forEach(f => {
  if (!f.endsWith('.md')) return;

  const str = fs.readFileSync(path.join(docsFolder, f)).toString();
  const tokens = marked.lexer(str, { gfm: true });

  const parsed: Context[] = [];
  iterateTokens(tokens, once => {
    once(heading => heading.isHeading() && heading.depth === 3 && (heading.tokens.length || 0) > 3).then(
      (heading, once, done) => {
        const name = heading.asHeading()?.tokens[0].asText()?.text.trim() ?? '';
        const rawTagName = escape(heading.asHeading()?.tokens[2].asText()?.text.trim() ?? '');
        const tagName = rawTagName.slice(1, rawTagName.length - 1);
        const anchor = `${name}-${tagName}`.toLowerCase();
        const file = `${f}#${anchor}`;
        const context: Context = {
          name,
          properties: [],
          events: [],
          methods: [],
          file,
          tagName,
        };
        once(t => t.type === 'heading' && t.text === 'Properties').then((_, once) => {
          once(t => t.type === 'table').then(table => {
            table.asTable()!.rows.forEach(row => {
              assert(row[0].tokens.length === 1 && row[0].tokens[0].isCodespan());
              assert(row[2].tokens.length === 1 && row[2].tokens[0].isCodespan());
              assert(row[3].tokens.length === 1 && row[3].tokens[0].isCodespan());
              context.properties.push({
                name: escape(row[0].tokens[0]?.asCodespan()?.text ?? ''),
                type: escape(row[2].tokens[0]?.asCodespan()?.text ?? ''),
                defaultValue: escape(row[3].tokens[0]?.asCodespan()?.text ?? ''),
                description: escape(row[4].text || ''),
              });
            });
          });
        });
        once(t => t.type === 'heading' && t.text === 'Events').then((_, once) => {
          once(t => t.type === 'table').then(table => {
            table.asTable()!.rows.forEach(row => {
              assert(row[0].tokens.length === 1 && row[0].tokens[0].isCodespan());
              assert(row[1].tokens.length === 1 && row[1].tokens[0].isCodespan());
              context.events.push({
                name: escape(row[0].tokens[0]?.asCodespan()?.text ?? ''),
                type: escape(row[1].tokens[0]?.asCodespan()?.text ?? ''),
                bubbles: escape(row[2].text || ''),
                composed: escape(row[3].text || ''),
                description: escape(row[4].text || ''),
              });
            });
          });
        });
        once(t => t.type === 'heading' && t.text === 'Methods').then((_, once) => {
          once(t => t.type === 'table').then(table => {
            table.asTable()!.rows.forEach(row => {
              // assert(row[0].tokens.length === 1 && row[0].tokens[0].isCodespan());
              // assert(row[1].tokens.length === 1);
              context.methods.push({
                name: escape(row[0].tokens[0]?.asCodespan()?.text ?? ''),
                parameters: [escape(row[1].tokens[0]?.asCodespan()?.text ?? '')],
                returns: escape(row[2].tokens[0]?.asCodespan()?.text ?? ''),
                description: escape(row[3].text || ''),
              });
            });
          });
        });
        done(() => {
          parsed.push(context);
        });
      },
    );
  });

  components.push(...parsed);
});

// dirty quick fix for md-icon which has no `Properties` section
components.push({
  file: 'icon.md',
  name: 'MdIcon',
  tagName: 'md-icon',
  properties: [],
  events: [],
  methods: [],
});
components.push({
  file: 'elevation.md',
  name: 'MdElevation',
  tagName: 'md-elevation',
  properties: [],
  events: [],
  methods: [],
});

const typeMap = new Map<string, string>();
typeMap.set('HTMLElement & Partial<SurfacePositionTarget>', 'HTMLElement');
typeMap.set('Chip', 'HTMLElement');
typeMap.set('Chip[]', 'HTMLElement[]');
typeMap.set('Tab', 'HTMLElement');
typeMap.set('Tab[]', 'HTMLElement[]');
typeMap.set('() => DialogAnimation', '() => any');
typeMap.set('TypeaheadController', 'any');

components.forEach(c => {
  if (c.name.startsWith('Md')) {
    typeMap.set(c.name.slice(2), 'HTMLElement');
    typeMap.set(`${c.name.slice(2)}[]`, `HTMLElement[]`);
  }
});

const result = `
/* eslint-disable @typescript-eslint/no-explicit-any */
import type * as SolidJS from 'solid-js';

type SelectOption = any;
type Reason = any;

declare namespace MaterialWeb {
  ${components
    .map(c => {
      const properties = c.properties
        .map(p => {
          const ret: string[] = ['/**'];
          if (p.description !== '') {
            const description = p.description.split('<br>').join('\n * \n * ');
            ret.push(` * @description ${description}`);
          }
          if (p.defaultValue !== '') ret.push(` * @default ${p.defaultValue}`);
          let type = p.type;
          if (typeMap.has(type)) {
            ret.push(` * @type {${p.type}}`);
            type = typeMap.get(p.type)!;
          }
          if (p.name === 'inputMode') {
            type = '"none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search"';
          }
          ret.push(` * @link https://github.com/material-components/material-web/blob/main/docs/components/${c.file}`);
          ret.push(' */');
          ret.push(`${p.name}${p.defaultValue !== '' ? '?' : ''}: ${type};`);
          return ret.join('\n');
        })
        .join('\n');
      const events = c.events
        .map(p => {
          const ret: string[] = ['/**'];
          if (p.description !== '') {
            const description = p.description.split('<br>').join('\n * \n * ');
            ret.push(` * @description ${description}`);
          }
          const type = p.type;
          const camel = snakeToCamel('on-' + p.name);
          ret.push(` * @bubbles ${p.bubbles}`);
          ret.push(` * @composed ${p.composed}`);
          ret.push(` * @link https://github.com/material-components/material-web/blob/main/docs/components/${c.file}`);
          ret.push(' */');
          // onBeforeInput?: InputEventHandlerUnion<T, InputEvent>;
          // onBlur?: FocusEventHandlerUnion<T, FocusEvent>;
          // onChange?: ChangeEventHandlerUnion<T, Event>;
          // onFocus?: FocusEventHandlerUnion<T, FocusEvent>;
          // onInput?: InputEventHandlerUnion<T, InputEvent>;
          const handler = (() => {
            switch (p.name) {
              case 'before-input':
                return 'InputEventHandlerUnion';
              case 'blur':
                return 'FocusEventHandlerUnion';
              case 'change':
                return 'ChangeEventHandlerUnion';
              case 'focus':
                return 'FocusEventHandlerUnion';
              case 'input':
                return 'InputEventHandlerUnion';
              default:
                return 'EventHandlerUnion';
            }
          })();
          return [
            ...ret,
            `${camel}?: SolidJS.JSX.${handler}<T, ${type}>;`,
            ...ret,
            `${camel.toLowerCase()}?: SolidJS.JSX.${handler}<T, ${type}>;`,
          ].join('\n');
        })
        .join('\n');
      return `export interface ${c.name}<T> extends SolidJS.JSX.HTMLAttributes<T> {${properties}\n${events}}`;
    })
    .join('\n')}
}

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      ${components
        .map(c =>
          [
            `/** @link https://github.com/material-components/material-web/blob/main/docs/components/${c.file} */`,
            `'${c.tagName}': MaterialWeb.${c.name}<HTMLElement>;`,
          ].join('\n'),
        )
        .join('\n')}
    }
  }
}
`;

const outputDir = path.join(__dirname, '..', 'dist');
const outputFilename = 'material-web-tags.d.ts';
format(outputFilename, result)
  .then(formatted => {
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(path.join(outputDir, outputFilename), formatted ?? '');
  })
  .catch((err: unknown) => {
    console.error(err);
  });
