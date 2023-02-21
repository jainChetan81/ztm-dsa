// ind duplicate values

function findDuplicateNumbers(arr: number[]): number[] {
	const set = new Set<number>();
	const duplicate = new Set<number>();
	for (let i = 0; i < arr.length; i++) {
		if (set.has(arr[i])) {
			duplicate.add(arr[i]);
		}
		set.add(arr[i]);
	}
	return [...duplicate];
}
console.log(findDuplicateNumbers([5, 5, 5, 6, 2, 3, 2, 3, 2, 41, 3, 4, 9]));
