import { config } from "typescript-eslint";

import type { TSESLint } from "@typescript-eslint/utils";

export default config({
	name: "@ariesclark/eslint-config/browser"
}) as TSESLint.FlatConfig.ConfigArray;
