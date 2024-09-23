import { config } from "typescript-eslint";
// @ts-expect-error: types not available.
import PluginPromise from "eslint-plugin-promise";

import type { TSESLint } from "@typescript-eslint/utils";

const promise: Array<TSESLint.FlatConfig.Config> = config({
	extends: [PluginPromise.configs["flat/recommended"]],
	name: "@ariesclark/eslint-config/promise",
	plugins: { promise: PluginPromise }
});

export default promise;
