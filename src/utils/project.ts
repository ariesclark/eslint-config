import path from "path";
import { readFileSync } from "fs";

export function getProjectRoot(): string {
	return process.cwd();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPackage(): any {
	return JSON.parse(readFileSync(path.resolve(getProjectRoot(), "package.json"), "utf-8"));
}
