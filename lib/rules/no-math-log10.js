/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { READ, ReferenceTracker } = require("eslint-utils")

module.exports = {
    meta: {
        docs: {
            description: "disallow the `Math.log10` method.",
            category: "ES2015",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-es/blob/v1.2.0/docs/rules/no-math-log10.md",
        },
        fixable: null,
        schema: [],
        messages: {
            forbidden: "ES2015 '{{name}}' method is forbidden.",
        },
    },
    create(context) {
        return {
            "Program:exit"() {
                const tracker = new ReferenceTracker(context.getScope())
                for (const { node, path } of tracker.iterateGlobalReferences({
                    Math: {
                        log10: { [READ]: true },
                    },
                })) {
                    context.report({
                        node,
                        messageId: "forbidden",
                        data: { name: path.join(".") },
                    })
                }
            },
        }
    },
}