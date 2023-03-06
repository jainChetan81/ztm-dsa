const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

export function insertionSortNew(array: number[]) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < i; j++) {
			if (array[j] > array[i]) {
				[array[j], array[i]] = [array[i], array[j]];
			}
		}
	}
}

export function insertionSort(array: number[]) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] < array[0]) {
			array.unshift(array.splice(0, i)[0]);
		} else {
			for (let j = 1; j < i; j++) {
				if (array[i] > array[j - 1] && array[i] < array[j]) {
					array.splice(j, 0, array.slice(i, 1)[0]);
				}
			}
		}
	}
}

insertionSort(numbers);
insertionSortNew(numbers2);
console.log(numbers);
console.log(numbers2);

// used when list is almost sorted
// O(n) when list is almost sorted
// O(n*n) when list is not sorted
// O(n*n) when list is reverse sorted

//  2 5 3 4
