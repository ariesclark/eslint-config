import antfu, { type ConfigNames, getOverrides, type OptionsConfig, type TypedFlatConfigItem } from "@antfu/eslint-config";
import type { FlatConfigComposer, } from "eslint-flat-config-utils";
import { isPackageExists } from "local-pkg";

import { next, type NextOptions } from "./configs/next.js";
import { tailwind, type TailwindOptions } from "./configs/tailwind.js";

export type Options = {
	next?: Omit<NextOptions, "typescript"> | boolean;
	tailwind?: TailwindOptions | boolean;
} & Omit<OptionsConfig, "lessOpinionated" | "overrides" | "unicorn"> & Omit<TypedFlatConfigItem, "files">;
export type Composer = FlatConfigComposer<TypedFlatConfigItem, ConfigNames>;

const typeOrder = [
	["object", "literal", "named"],
	["intersection", "union", "keyword"],
	"conditional",
	"function",
	"import",
	"operator",
	"tuple",
	"unknown",
	"nullish",
];

export function configure(options: Options = {}): Composer {
	const availablePackages = (["react", "next", "tailwindcss"] as const).filter((package_) => isPackageExists(package_));

	const {
		react: reactOptions = availablePackages.includes("react") || availablePackages.includes("next"),
		next: nextOptions = availablePackages.includes("next"),
		tailwind: tailwindOptions = availablePackages.includes("tailwindcss"),
	} = options;

	return antfu({
		name: "ariesclark",
		stylistic: {
			indent: "tab",
			quotes: "double",
			semi: true,
			overrides: {
				"style/arrow-parens": ["error", "always"],
				"style/quote-props": ["error", "as-needed"],
				"style/comma-dangle": "off",
				"antfu/if-newline": "off",
				"antfu/curly": "off",
				"perfectionist/sort-imports": ["error", {
					newlinesBetween: "always",
					groups: [
						"builtin",
						"external",
						["internal", "internal-type"],
						["parent", "parent-type", "sibling", "sibling-type", "index", "index-type"],
						"side-effect",
						"object",
						"unknown",
					],
				}],
				"perfectionist/sort-array-includes": ["error", {
					partitionByNewLine: true,
					partitionByComment: true
				}],
				"perfectionist/sort-enums": ["error", {
					partitionByNewLine: true,
					partitionByComment: true
				}],
				"perfectionist/sort-intersection-types": ["error", {
					partitionByNewLine: true,
					partitionByComment: true,
					groups: typeOrder
				}],
				"perfectionist/sort-union-types": ["error", {
					partitionByNewLine: true,
					partitionByComment: true,
					groups: typeOrder
				}],
				"perfectionist/sort-jsx-props": ["error", {
					ignoreCase: true,
					groups: [
						"shorthand",
						"multiline",
						"unknown",
						"event",
					],
					customGroups: {
						event: "on*"
					},
				}]
			},
		},
		typescript: {
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
			}
		},
		react: reactOptions
			? {
					overrides: getOverrides(options, "react")
				}
			: false,
		unicorn: true
	}).overrides({
		"antfu/unicorn/rules": {
			rules: {
				"unicorn/catch-error-name": ["error", { name: "reason" }],
				"unicorn/prefer-number-properties": ["error", { checkInfinity: false }],
				"unicorn/no-useless-undefined": ["error", { checkArguments: false }],
				"unicorn/prevent-abbreviations": [
					"error",
					{
						replacements: {
							...(reactOptions ? { props: false } : undefined)
						}
					}
				]
			}
		}
	}).append(
		nextOptions && next(nextOptions === true ? {} : nextOptions),
		tailwindOptions && tailwind(tailwindOptions === true ? {} : tailwindOptions)
	);
}

export const configs = {
	recommended: configure()
};
