import { insertionSortNew, insertionSort } from "./impl-insertion-sort.ts";
Deno.bench("insertion sort old method", () => {
	insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
});

Deno.bench("insertion Sort new method", () => {
	insertionSortNew([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
});
