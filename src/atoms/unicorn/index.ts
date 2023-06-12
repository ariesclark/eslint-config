import { declare } from "../../utils/declare";

export = declare({
	extends: ["plugin:unicorn/recommended"],
	rules: {
		"unicorn/catch-error-name": [
			"warn",
			{
				name: "reason"
			}
		],
		"unicorn/no-null": "off",
		"unicorn/no-await-expression-member": "off",
		"unicorn/consistent-destructuring": "off"
	},
	overrides: [
		{
			files: "**/*.d.ts",
			rules: {
				"unicorn/prevent-abbreviations": "off"
			}
		}
	]
});
