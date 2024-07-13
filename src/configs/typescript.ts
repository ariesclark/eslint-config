import { config, configs } from "typescript-eslint";

import type { Linter } from "eslint";

export default config({
	extends: [...configs.strictTypeChecked, configs.disableTypeChecked],
	files: ["**/*.{ts,tsx}"],
	languageOptions: {
		parserOptions: {
			project: true,
			projectService: true
		}
	},
	name: "@ariesclark/eslint-config/typescript",
	rules: {
		"@typescript-eslint/array-type": [
			"warn",
			{
				default: "generic"
			}
		],
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/consistent-type-assertions": ["warn"],
		"@typescript-eslint/consistent-type-definitions": ["warn"],
		"@typescript-eslint/consistent-type-imports": [
			"warn",
			{
				fixStyle: "inline-type-imports",
				prefer: "type-imports"
			}
		],

		"@typescript-eslint/explicit-member-accessibility": [
			"warn",
			{
				accessibility: "explicit"
			}
		],
		"@typescript-eslint/no-array-delete": ["warn"],
		"@typescript-eslint/no-confusing-void-expression": "off",
		"@typescript-eslint/no-empty-interface": ["warn"],
		"@typescript-eslint/no-floating-promises": ["warn"],
		"@typescript-eslint/no-import-type-side-effects": ["warn"],
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_"
			}
		]
	},
	settings: {
		"import/resolver": {
			typescript: {}
		}
	}
}) as Array<Linter.FlatConfig>;
