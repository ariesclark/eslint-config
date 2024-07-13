import { config } from "typescript-eslint";
import prettier from "eslint-plugin-prettier/recommended";

import type { Linter } from "eslint";

const options = {
	endOfLine: "lf",
	jsxSingleQuote: false,
	singleQuote: false,
	trailingComma: "none",
	useTabs: true
};

export default config({
	extends: [prettier],
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
}) as Array<Linter.FlatConfig>;
