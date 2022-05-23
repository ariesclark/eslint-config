import { Linter } from "eslint";

export function declare<T extends Linter.Config>(value: T): T {
	return value;
}
