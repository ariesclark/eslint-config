import { configs, config } from "./dist/index.js";
import node from "./dist/configs/node.js";

export default config({
	extends: [...configs.recommended, ...node]
});
