module.exports = {
    rules: {
        "react/button-has-type": ["warn"],
        "react/jsx-sort-props": ["warn", {
            ignoreCase: true,
            callbacksLast: true,
            shorthandFirst: true,
            multiline: "last"
        }]
    },
    overrides: [
        {
            files: ["**/*.jsx"],
            rules: {
                "react/prop-types": ["warn"]
            }
        },
        {
            files: ["**/*.tsx"],
            rules: {
                "react/prop-types": ["off"]
            }
        }
    ]
}