import { config } from "typescript-eslint";
import PluginPrettier from "eslint-plugin-prettier/recommended";

import type { TSESLint } from "@typescript-eslint/utils";

const options = {
	endOfLine: "lf",
	jsxSingleQuote: false,
	singleQuote: false,
	trailingComma: "none",
	useTabs: true
};

export default config({
	// @ts-expect-error: mismatch types.
	extends: [PluginPrettier],
	name: "@ariesclark/eslint-config/prettier",
	rules: {
		"prettier/prettier": [
			"warn",
			options,
			{
				usePrettierrc: false
			}
		]
	}
}) as TSESLint.FlatConfig.ConfigArray;
