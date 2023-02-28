const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array: number[]) {
	for (let i = 0; i < array.length; i++) {
		let min = array[i],
			minIndex = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < min) {
				min = array[j];
				minIndex = j;
			}
		}
		[array[i], array[minIndex]] = [array[minIndex], array[i]];
	}
}

selectionSort(numbers);
console.log(numbers);

// O(n*n) when iin all cases
