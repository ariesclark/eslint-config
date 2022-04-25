module.exports = {
    extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        ...[
            "../base/index.js",
            "./rules/hooks.js",
            "./rules/props.js"
        ].map(require.resolve)
    ],
    plugins: [
        "react",
        "react-hooks"
    ],
    settings: {
        react: {
            version: "detect"
        }
    }
}