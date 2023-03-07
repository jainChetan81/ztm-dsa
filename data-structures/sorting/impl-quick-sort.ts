const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
type A = number[];
type N = number;
function quickSort(array: A, left: N = 0, right: N = array.length - 1) {
	let pivot;
	let partitionIndex;

	if (left < right) {
		pivot = right;
		partitionIndex = partition(array, pivot, left, right);
		quickSort(array, left, partitionIndex - 1);
		quickSort(array, partitionIndex + 1, right);
	}
	return array;
}

function partition(array: A, pivot: N, left: N, right: N) {
	const pivotValue = array[pivot];
	let partitionIndex = left;

	for (let i = left; i < right; i++) {
		if (array[i] < pivotValue) {
			swap(array, i, partitionIndex);
			partitionIndex++;
		}
	}
	swap(array, right, partitionIndex);
	return partitionIndex;
}

function swap(array: A, firstIndex: N, secondIndex: N) {
	[array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers);
console.log(numbers);
