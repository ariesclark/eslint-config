module.exports = {
    rules: {
        "import/prefer-default-export": "off",
        "import/no-anonymous-default-export": "off",
        "import/order": ["warn", {
            "newlines-between": "always",
            groups: [
                "builtin",
                "external",
                "internal",
                "parent",
                "sibling",
                "index",
                "object",
                "type"
            ]
        }],

        "unicorn/filename-case": ["error", {
            cases: {
                camelCase: true,
                pascalCase: true
            }
        }]
    },
    overrides: [
        {
            files: ["**/*.{js,jsx}"],
            rules: {
                "unicorn/prefer-module": "off"
            }
        },
        {
            files: ["**/*.{jsx,tsx}"],
            rules: {
                "unicorn/filename-case": ["error", {
                    cases: {
                        pascalCase: true
                    }
                }]
            }
        }
    ]
}