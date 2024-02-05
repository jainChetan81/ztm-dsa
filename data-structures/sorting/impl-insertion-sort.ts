const numbersIns = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

export function insertionSortNew(array: number[]) {}

export function insertionSort(array: number[]) {
	if (!array.length) return; 
	for (let j = 1; j < array.length; j++) {
		let i = j - 1;
		const current = array[j];
		while (i >= 0 && current < array[i]) {
			array[i + 1] = array[i];
			i--;
		}
		array[i + 1] = current;
	}
}

console.log(insertionSort(numbersIns));
// insertionSortNew(numbers2);
// console.log(numbers);
// console.log(numbers2);

// used when list is almost sorted
// O(n) when list is almost sorted
// O(n*n) when list is not sorted
// O(n*n) when list is reverse sorted

//  2 5 3 4
