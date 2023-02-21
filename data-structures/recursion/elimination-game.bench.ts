import { lastRemainingBig } from "./elimination-game.ts";
Deno.bench("elimination-game recursive 8", () => {
	const arr = Array(6162)
		.fill(6162)
		.map((_num, i) => i + 1);
	lastRemainingBig(6162, arr);
});

Deno.bench("elimination-game recursive 4", () => {
	lastRemainingBig(6162);
});
