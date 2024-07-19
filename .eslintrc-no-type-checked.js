const config = require('./.eslintrc');

delete config.overrides[0].parserOptions;
config.overrides[0].extends = config.overrides[0].extends.map(e => e.replace(/-type-checked$/, ''));

module.exports = config;
