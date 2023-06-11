import path from "node:path";
import { readFileSync } from "node:fs";

export function getProjectRoot(): string {
	return process.env["ESLINT_PROJECT_ROOT"] || process.cwd();
}

export function getPackage(): unknown {
	return JSON.parse(
		readFileSync(path.resolve(getProjectRoot(), "package.json"), "utf8")
	);
}
