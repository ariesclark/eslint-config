import type { OptionsOverrides, OptionsTypescript, OptionsTypeScriptParserOptions, OptionsTypeScriptWithTypes } from "@antfu/eslint-config";

export function typescript(options: OptionsOverrides & OptionsTypeScriptParserOptions & OptionsTypeScriptWithTypes = {}): OptionsTypescript {
	const { overrides = {} } = options;

	return {
		...options,
		overrides: {
			"ts/no-redeclare": "off",
			"ts/no-use-before-define": "off",
			"ts/array-type": [
				"error",
				{
					default: "generic"
				}
			],
			"ts/explicit-member-accessibility": [
				"error",
				{
					accessibility: "explicit"
				}
			],
			...overrides
		}
	};
}
