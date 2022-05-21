module.exports = {
    overrides: [
        {
            files: ["**/*.{ts,tsx}"],
            rules: {
                "lines-between-class-members": "off",
                "@typescript-eslint/lines-between-class-members": ["warn", "always", {
                    exceptAfterSingleLine: true,
                    exceptAfterOverload: true
                }],

                /**
                 * This rule is disabled until it can be automatically fixed.
                 * @see https://github.com/typescript-eslint/typescript-eslint/issues/2296
                 */
                "@typescript-eslint/member-ordering": ["off", {
                    "default": {
                        "order": "alphabetically",
                        "memberTypes": [
                            "signature",
                            "field",
                            "constructor",
                            [
                                "get",
                                "set"
                            ],
                            "method"
                        ]
                    }
                }],

                "@typescript-eslint/explicit-member-accessibility": ["warn", {
                    accessibility: "explicit"
                }],

                "@typescript-eslint/semi": ["warn", "always"],
                "semi": "off",

                "@typescript-eslint/member-delimiter-style": ["warn", {
                    "overrides": {
                        "interface": {
                            "multiline": {
                                "delimiter": "semi",
                                "requireLast": false
                            },
                            "singleline": {
                                "delimiter": "semi",
                                "requireLast": false
                            },
                        },
                        "typeLiteral": {
                            "multiline": {
                                "delimiter": "comma",
                                "requireLast": false
                            },
                            "singleline": {
                                "delimiter": "comma",
                                "requireLast": false
                            },
                        }
                    }
                }],

                "space-before-function-paren": "off",
                "@typescript-eslint/space-before-function-paren": ["warn", "always"],

                "@typescript-eslint/array-type": ["warn", {
                    default: "generic"
                }],
            }
        }
    ],
    rules: {
        "yoda": ["warn"],
        "indent": ["warn", "tab"],
    }
}