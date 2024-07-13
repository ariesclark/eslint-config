import { config } from "typescript-eslint";
// @ts-expect-error: types not available.
import promise from "eslint-plugin-promise";

import type { Linter } from "eslint";

export default config({
	extends: [promise.configs["flat/recommended"]],
	name: "@ariesclark/eslint-config/promise",
	plugins: { promise }
}) as Array<Linter.FlatConfig>;
