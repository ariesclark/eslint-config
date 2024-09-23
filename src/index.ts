import { config } from "typescript-eslint";
import js from "@eslint/js";

import node from "./configs/node.js";
import _import from "./configs/import.js";
import typescript from "./configs/typescript.js";
import promise from "./configs/promise.js";
import prettier from "./configs/prettier.js";
import unicorn from "./configs/unicorn.js";

import type { Linter } from "eslint";

export const configs = {
	recommended: config({
		extends: [
			js.configs.recommended,
			// @ts-expect-error: mismatch types.
			...promise,
			// ...sortKeys,
			// @ts-expect-error: mismatch types.
			...typescript,
			// @ts-expect-error: mismatch types.
			..._import,
			// @ts-expect-error: mismatch types.
			...unicorn,
			// @ts-expect-error: mismatch types.
			...prettier,
			// @ts-expect-error: mismatch types.
			...config({
				// @ts-expect-error: mismatch types.
				extends: [...node],
				files: ["**/.eslintrc.{js,cjs,mjs}", "**/*.config.{js,cjs,mjs}"]
			})
		],
		ignores: ["**/node_modules/**", "**/dist/**", "**/__generated/**"],
		linterOptions: {
			reportUnusedDisableDirectives: true
		},
		rules: {
			"no-eval": ["warn"],
			"no-sparse-arrays": ["warn"],
			"no-throw-literal": ["error"],
			"no-void": "off",
			"no-with": ["warn"],
			"require-atomic-updates": ["warn"],
			"symbol-description": ["warn"],
			yoda: ["warn"]
		}
	}) as Array<Linter.Config>
};

export { config };
