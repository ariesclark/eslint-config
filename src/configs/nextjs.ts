import { config } from "typescript-eslint";

import { v8compat } from "../v8-compact.js";

import react from "./react.js";

import type { TSESLint } from "@typescript-eslint/utils";

export default config({
	// @ts-expect-error: mismatch types.
	extends: [...react, ...v8compat.extends("plugin:@next/next/recommended")],
	name: "@ariesclark/eslint-config/nextjs",
	rules: {
		// Broken rules in ESLint v9.
		"@next/next/no-duplicate-head": "off",
		"@next/next/no-page-custom-font": "off"
	}
}) as TSESLint.FlatConfig.ConfigArray;
