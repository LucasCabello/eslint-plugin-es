/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const Pattern = /^0[bB]/

module.exports = {
    meta: {
        docs: {
            description: "disallow binary numeric literals.",
            category: "ES2015",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-binary-numeric-literals.html",
        },
        fixable: null,
        schema: [],
        messages: {
            forbidden: "ES2015 binary numeric literals are forbidden.",
        },
    },
    create(context) {
        return {
            Literal(node) {
                if (typeof node.value === "number" && Pattern.test(node.raw)) {
                    context.report({ node, messageId: "forbidden" })
                }
            },
        }
    },
}
