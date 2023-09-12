export function getProjectRoot(): string {
	return process.env["ESLINT_PROJECT_ROOT"] || process.cwd();
}