import { Linter } from "eslint";

/** Identity function with strict types  */
export function declare<T extends Linter.Config>(value: T): T {
	return value;
}
