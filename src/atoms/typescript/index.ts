import { declare } from "../../utils/declare";
import { getProjectRoot } from "../../utils/project";

export = declare({
	overrides: [
		{
			files: ["**/*.{ts,tsx}"],
			extends: [
				"plugin:@typescript-eslint/strict-type-checked",
				"plugin:@typescript-eslint/disable-type-checked",
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
				"@typescript-eslint/no-unused-vars": [
					"warn",
					{
						argsIgnorePattern: "^_",
						varsIgnorePattern: "^_"
					}
				],

				"@typescript-eslint/no-empty-interface": ["warn"],
				"@typescript-eslint/no-inferrable-types": "off",
				"@typescript-eslint/no-floating-promises": ["warn"],
				"@typescript-eslint/consistent-type-assertions": ["warn"],
				"@typescript-eslint/consistent-type-definitions": ["warn"],
				"@typescript-eslint/no-array-delete": ["warn"],

				"@typescript-eslint/no-import-type-side-effects": ["warn"],
				"@typescript-eslint/consistent-type-imports": [
					"warn",
					{
						prefer: "type-imports",
						fixStyle: "inline-type-imports"
					}
				],

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

				/**
				 * Sometimes it's easier to just opt-out of the type system for a moment,
				 * instead of trying to make it work and waste time.
				 *
				 * We can always come back and fix it later.
				 */
				"@typescript-eslint/ban-ts-comment": "off"
			}
		}
	]
});
