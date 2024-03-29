import { declare } from "../../utils/declare";

export = declare({
	overrides: [
		{
			files: ["**/*"],
			extends: ["plugin:prettier/recommended"],
			rules: {
				"prettier/prettier": [
					"warn",
					{
						singleQuote: false,
						jsxSingleQuote: false,
						trailingComma: "none",
						endOfLine: "lf",
						useTabs: true
					},
					{
						usePrettierrc: false
					}
				]
			}
		}
	]
});
