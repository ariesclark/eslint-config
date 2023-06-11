import { declare } from "../../utils/declare";
import { getProjectRoot } from "../../utils/project";

export = declare({
	overrides: [
		{
			files: ["**/*.{ts,tsx}"],
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:import/typescript"
			],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: "module",
				tsconfigRootDir: getProjectRoot(),
				project: ["./tsconfig.json"]
			},
			settings: {
				"import/resolver": {
					typescript: {}
				}
			},
			plugins: ["@typescript-eslint"],
			rules: {
				"@typescript-eslint/no-empty-interface": ["warn"],
				"@typescript-eslint/no-inferrable-types": "off",
				"@typescript-eslint/no-floating-promises": ["warn"],
				"@typescript-eslint/consistent-type-assertions": ["warn"],
				"@typescript-eslint/consistent-type-definitions": ["warn"],

				"lines-between-class-members": "off",
				"@typescript-eslint/lines-between-class-members": [
					"warn",
					"always",
					{
						exceptAfterSingleLine: true,
						exceptAfterOverload: true
					}
				],

				/**
				 * Feature blocked
				 * @see https://github.com/typescript-eslint/typescript-eslint/issues/2296
				 */
				"@typescript-eslint/member-ordering": [
					"off",
					{
						default: {
							order: "alphabetically",
							memberTypes: [
								"signature",
								"field",
								"constructor",
								["get", "set"],
								"method"
							]
						}
					}
				],

				"@typescript-eslint/explicit-member-accessibility": [
					"warn",
					{
						accessibility: "explicit"
					}
				],

				"@typescript-eslint/array-type": [
					"warn",
					{
						default: "generic"
					}
				],

				"@typescript-eslint/ban-ts-comment": "off"
			}
		}
	]
});
