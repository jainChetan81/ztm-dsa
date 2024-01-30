const numbersSelection = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array: number[]) {
	if (!array.length) return;
	for (let i = 0; i < array.length; i++) {
		let small = array[i],
			minIndex = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < small) {
				small = array[j];
				minIndex = j;
			}
		}
		[array[i], array[minIndex]] = [array[minIndex], array[i]];
	}
}

selectionSort(numbersSelection);
console.log(numbersSelection);

// O(n*n) when in all cases
