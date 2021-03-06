# disallow Unicode code point escape sequences (es/no-unicode-codepoint-escapes)

- 🔧 The `--fix` option on the [command line](http://eslint.org/docs/user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

This rule reports ES2015 Unicode code point escape sequences as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-unicode-codepoint-escapes: error */
const a\u{31} = `foo`
const a2 = &quot;a\u{62}b&quot;
" />

👌 Examples of **correct** code for this rule:

<eslint-playground type="good" code="/*eslint es/no-unicode-codepoint-escapes: error */
const a\u0031 = `foo`
const a2 = &quot;a\u0062b&quot;
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.3.1/lib/rules/no-unicode-codepoint-escapes.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.3.1/tests/lib/rules/no-unicode-codepoint-escapes.js)
