import { config } from "typescript-eslint";

import react from "./react.js";

import type { Linter } from "eslint";

export default config({
	extends: [
		...react
		// "plugin:@next/next/recommended"
	],
	name: "@ariesclark/eslint-config/nextjs"
}) as Array<Linter.FlatConfig>;
