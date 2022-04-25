module.exports = {
    rules: {
        "import/prefer-default-export": "off",
        "import/no-anonymous-default-export": "off",
        "import/no-unresolved": "off",
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
    }
}