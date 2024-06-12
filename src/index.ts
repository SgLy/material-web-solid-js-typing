import * as fs from 'fs';
import * as path from 'path';
import * as marked from 'marked';

import { assert, copy, escape, format } from './utils';

import './marked-polyfill';

type TokenVerifier = (token: marked.Token) => boolean;
type Processor<T extends Record<string, unknown>> = (token: marked.Token, context: Partial<T>) => void;

const tokenIterator = <T extends Record<string, unknown>>(tokens: marked.TokensList, initialContext: Partial<T>) => {
  const verifiers: Array<TokenVerifier> = [];
  const processors: Array<Processor<T>> = [];
  const contexts: Array<Partial<T>> = [copy(initialContext)];
  return {
    add(verifier: TokenVerifier, processor?: Processor<T>) {
      verifiers.push(verifier);
      processors.push(processor || (() => {}));
      return this;
    },
    process() {
      let nextLevel = 0;
      const results: Array<T> = [];
      tokens.forEach(token => {
        const minSatisfiedTokenLevel = verifiers.findIndex(v => v(token));
        if (minSatisfiedTokenLevel === nextLevel) {
          const context: Partial<T> = copy(contexts[nextLevel]);
          processors[minSatisfiedTokenLevel](token, context);
          contexts.push(context);
          nextLevel++;
          if (nextLevel === processors.length) {
            nextLevel = 0;
            contexts.length = 1;
            results.push(context as T);
          }
        } else if (minSatisfiedTokenLevel !== -1 && minSatisfiedTokenLevel < nextLevel) {
          nextLevel = minSatisfiedTokenLevel;
          contexts.length = minSatisfiedTokenLevel + 1;
        }
      });
      return results;
    },
  };
};

type Context = {
  name: string;
  tagName: string;
  file: string;
  properties: Array<{
    name: string;
    type: string;
    defaultValue: string;
    description: string;
  }>;
};

const components: Array<Context> = [];

const docsFolder = path.join(__dirname, '..', 'material-web', 'docs', 'components');

fs.readdirSync(docsFolder).forEach(f => {
  if (!f.endsWith('.md')) return;

  const str = fs.readFileSync(path.join(docsFolder, f)).toString();
  const tokens = marked.lexer(str, { gfm: true });

  const parsed = tokenIterator<Context>(tokens, {})
    .add(
      heading => heading.isHeading() && heading.depth === 3 && (heading.tokens?.length || 0) > 3,
      (heading, context) => {
        context.name = heading.asHeading()?.tokens[0].asText()?.text.trim();
        const tagName = escape(heading.asHeading()?.tokens[2].asText()?.text.trim() || '');
        context.tagName = tagName.slice(1, tagName.length - 1);
        const anchor = `${context.name!}-${context.tagName!}`.toLowerCase();
        context.file = `${f}#${anchor}`;
      },
    )
    .add(t => t.type === 'heading' && t.text === 'Properties')
    .add(
      t => t.type === 'table',
      (table, context) => {
        context.properties = [];
        table.asTable()!.rows.forEach(row => {
          assert(row[0].tokens.length === 1 && row[0].tokens[0].isCodespan());
          assert(row[2].tokens.length === 1 && row[0].tokens[0].isCodespan());
          assert(row[3].tokens.length === 1 && row[0].tokens[0].isCodespan());
          context.properties!.push({
            name: escape(row[0].tokens[0]?.asCodespan()?.text || ''),
            type: escape(row[2].tokens[0]?.asCodespan()?.text || ''),
            defaultValue: escape(row[3].tokens[0]?.asCodespan()?.text || ''),
            description: escape(row[4].text || ''),
          });
        });
      },
    )
    .process();

  components.push(...parsed);
});

// dirty quick fix for md-icon which has no `Properties` section
components.push({
  file: 'icon.md',
  name: 'MdIcon',
  tagName: 'md-icon',
  properties: [],
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
          ret.push(`${p.name}: ${type};`);
          return ret.join('\n');
        })
        .join('\n');
      return `export interface ${c.name}<T> extends SolidJS.JSX.HTMLAttributes<T> {${properties}}`;
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
format(outputFilename, result).then(formatted => {
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, outputFilename), formatted || '');
});
