const { getProjectRoot } = require("../../project");



module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:promise/recommended",
        "plugin:import/recommended",
        "plugin:prettier/recommended",
        ...[
            "./rules/imports.js",
            "./rules/logical.js",
            "./rules/style.js",
            "./rules/types.js",
        ].map(require.resolve)
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "sourceType": "module",
        "ecmaVersion": 2020
    },
    plugins: [
        "sort-keys",
        "promise",
        "import",
    ],
    overrides: [
        {
            files: ["**/*.{ts,tsx}"],
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module",
                tsconfigRootDir: getProjectRoot(),
                project: ["./tsconfig.json"]
            },
            settings: {
                "import/resolver": {
                    typescript: {}
                },
            },
            plugins: [
                "@typescript-eslint",
                "tailwindcss"
            ],
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:tailwindcss/recommended",
                "plugin:import/typescript"
            ]
        }
    ]
}