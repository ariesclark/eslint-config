import antfu, { type ConfigNames, getOverrides, type OptionsConfig, resolveSubOptions, type TypedFlatConfigItem } from "@antfu/eslint-config";
import type { FlatConfigComposer, } from "eslint-flat-config-utils";
import { isPackageExists } from "local-pkg";

import { next, type NextOptions } from "./configs/next.js";
import { tailwind, type TailwindOptions } from "./configs/tailwind.js";
import { typescript } from "./configs/typescript.js";

export type Options = {
	next?: NextOptions | boolean;
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

/**
 * This function
 *
 * @returns A flat ESLint configuration, export this in your `eslint.config.{js,mjs}` file.
 */
export function configure(options: Options = {}, ...configs: Array<Parameters<typeof antfu>[1]>): Composer {
	const availablePackages = (["react", "next", "tailwindcss"] as const).filter((package_) => isPackageExists(package_));

	const {
		stylistic: stylisticOptions = {},
		react: reactOptions = availablePackages.includes("react") || availablePackages.includes("next"),
		next: nextOptions = availablePackages.includes("next"),
		tailwind: tailwindOptions = availablePackages.includes("tailwindcss"),
	} = options;

	return antfu({
		...options,
		name: "ariesclark",
		stylistic: stylisticOptions
			? {
					...(typeof stylisticOptions === "object" ? stylisticOptions : {}),
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
						}],
						...(typeof stylisticOptions === "object" ? stylisticOptions.overrides : {}),
					},
				}
			: false,
		typescript: typescript(),
		react: reactOptions || nextOptions
			? {
					overrides: getOverrides(options, "react")
				}
			: false,
		unicorn: true
	}, nextOptions ? next(nextOptions === true ? {} : nextOptions) : {}, tailwindOptions ? tailwind(tailwindOptions === true ? {} : tailwindOptions) : {}, ...configs).overrides({
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
	});
}

export const configs = {
	/**
	 * For backwards compatibility.
	 *
	 * @deprecated
	 * It is recommended to use {@link configure()} instead for complex configurations.
	 */
	get recommended() {
		return configure();
	}
};
