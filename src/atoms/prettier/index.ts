import { declare } from "../../utils/declare";

export = declare({
	overrides: [
		{
			files: ["**/*.{js,jsx,ts,tsx}"],
			extends: ["plugin:prettier/recommended"],
			rules: {
				"prettier/prettier": [
					"warn",
					{
						printWidth: 100,
						singleQuote: false,
						jsxSingleQuote: false,
						trailingComma: "none",
						endOfLine: "crlf",
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
