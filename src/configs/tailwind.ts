import { ensurePackages, interopDefault, type TypedFlatConfigItem } from "@antfu/eslint-config";
import type { Linter } from "eslint";

import type { RuleOptions, TailwindcssEnforcesShorthand } from "../typegen";

type TailwindSettings = NonNullable<TailwindcssEnforcesShorthand>[0];

export interface TailwindOptions {
	settings?: TailwindSettings;
}

export async function tailwind({ settings = {} }: TailwindOptions = {}): Promise<Array<TypedFlatConfigItem>> {
	await ensurePackages(["eslint-plugin-tailwindcss"]);
	const pluginTailwindcss = await interopDefault(import("eslint-plugin-tailwindcss"));

	return [
		{
			name: "ariesclark/tailwindcss/setup",
			plugins: { tailwindcss: pluginTailwindcss },
			settings: {
				tailwindcss: {
					...settings,
					callees: [
						"classnames",
						"clsx",
						"ctl",
						"cva",
						"twMerge",
						"tv",
						...settings.callees || []
					],
				}
			}
		},
		{
			name: "ariesclark/tailwindcss/rules",
			rules: {
				"tailwindcss/classnames-order": ["error", {}],
				"tailwindcss/enforces-negative-arbitrary-values": "warn",
				"tailwindcss/enforces-shorthand": "warn",
				"tailwindcss/no-contradicting-classname": "error",
				"tailwindcss/no-custom-classname": "warn",
				"tailwindcss/no-unnecessary-arbitrary-value": "warn"
			}
		}
	];
}
