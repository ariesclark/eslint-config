import fs from "node:fs/promises";

import { combine } from "@antfu/eslint-config";
import { flatConfigsToRulesDTS } from "eslint-typegen/core";

import { next } from "../src/configs/next";
import { tailwind } from "../src/configs/tailwind";

const configs = await combine(
	tailwind(),
	next()
);

const dts = await flatConfigsToRulesDTS(configs);
await fs.writeFile("src/typegen.d.ts", dts.replaceAll(/^type /gm, "export type "));
