module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:promise/recommended",
        "plugin:import/recommended",
        ...[
            "./rules/imports.js",
            "./rules/logical.js",
            "./rules/style.js",
            "./rules/types.js",
        ].map(require.resolve)
    ],
    plugins: [
        "@typescript-eslint",
        "promise",
        "import",
        "woke"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        project: ["./tsconfig.json"]
    }
}