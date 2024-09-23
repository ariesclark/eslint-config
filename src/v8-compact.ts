import { FlatCompat } from "@eslint/eslintrc";
export { fixupPluginRules } from "@eslint/compat";

export const v8compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
	recommendedConfig: {}
});
