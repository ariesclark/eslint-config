import { ensurePackages, interopDefault, type TypedFlatConfigItem } from "@antfu/eslint-config";

export interface NextOptions {
	/**
	 * Enable the core web vitals rules.
	 * @see https://nextjs.org/docs/app/building-your-application/configuring/eslint#core-web-vitals
	 * @default true
	 */
	webVitals?: boolean;
};

export async function next({ webVitals = true }: NextOptions = {}): Promise<Array<TypedFlatConfigItem>> {
	await ensurePackages(["@next/eslint-plugin-next"]);
	const pluginNext = await interopDefault(import("@next/eslint-plugin-next"));

	return [
		{
			name: "ariesclark/next/setup",
			plugins: {
				"@next/next": pluginNext
			}
		},
		{
			name: "ariesclark/next/rules",
			rules: {
				...pluginNext.configs.recommended.rules,
				...webVitals ? pluginNext.configs["core-web-vitals"].rules : [],
				"@next/next/no-duplicate-head": "off",
				"@next/next/no-page-custom-font": "off"
			}
		}
	];
}
