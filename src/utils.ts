import { ESLint } from 'eslint';
import { join } from 'path';

export const assert = (condition: boolean) => {
  if (!condition) throw new Error('Assertion failed');
};

export const copy = <T>(item: T): T => JSON.parse(JSON.stringify(item)) as T;

export const escape = (str: string) =>
  str
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&#x([0-9a-f]+);/g, (_, code: string) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&([a-zA-Z]+);/g, (_, name: string) => {
      const map: Record<string, string> = {
        nbsp: ' ',
        lt: '<',
        gt: '>',
        amp: '&',
        quot: '"',
        apos: "'",
      };
      return map[name.toLowerCase()];
    });

export const format = async (filename: string, str: string) => {
  const eslint = new ESLint({
    fix: true,
    useEslintrc: false,
    overrideConfigFile: join(__dirname, '..', '.eslintrc-no-type-checked.js'),
  });
  const results = await eslint.lintText(str, {
    filePath: filename,
  });

  const formatter = await eslint.loadFormatter();
  const resultText = formatter.format(results);

  console.log(resultText);

  return results[0].output ?? results[0].source;
};

export const snakeToCamel = (name: string) => {
  return name
    .split('-')
    .map((segment, index) => {
      if (index === 0) return segment;
      return segment[0].toUpperCase() + segment.slice(1);
    })
    .join('');
};
