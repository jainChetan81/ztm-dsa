const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array: number[]) {
	for (let i = 0; i < array.length; i++) {
		// consider the first case
		if (array[i] < array[0]) {
			array.unshift(array.splice(0, i)[0]);
		}
		// everything else
		else {
			for (let j = 1; j < i; j++) {
				if (array[i] > array[j - 1] && array[i] < array[j]) {
					array.splice(j, 0, array.slice(i, 1)[0]);
				}
			}
		}
	}
}

insertionSort(numbers);
console.log(numbers);

// used when list is almost sorted
// O(n) when list is almost sorted
// O(n*n) when list is not sorted
// O(n*n) when list is reverse sorted
