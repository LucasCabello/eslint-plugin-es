# disallow trailing commas in parameter/argument lists (es/no-trailing-function-commas)

This rule reports ES2017 [trailing commas in parameter/argument lists](https://github.com/tc39/proposal-trailing-function-commas#readme) as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-trailing-function-commas: error */
async function f1(a,) {}
let f2 = async function(a,) {}
let f3 = async (a,) =&gt; {}
let obj = { async f4(a,) {} }
class A { async f5(a,) {} }

foo(a,)
new F(a,)
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.3.1/lib/rules/no-trailing-function-commas.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.3.1/tests/lib/rules/no-trailing-function-commas.js)
