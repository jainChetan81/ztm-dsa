const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array: number[]) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				[array[i], array[j]] = [array[j], array[i]];
			}
		}
	}
}

bubbleSort(numbers);
console.log(numbers);
// used when list is almost sorted
// O(n) when list is almost sorted
// O(n*n) when list is not sorted
// O(n*n) when list is reverse sorted