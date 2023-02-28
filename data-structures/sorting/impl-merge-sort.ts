const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array: number[]): number[] {
	if (array.length === 1) {
		return array;
	}
	// Split Array in into right and left
	const left = array.slice(0, Math.floor(array.length / 2));
	const right = array.slice(Math.floor(array.length / 2));

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
	const result: number[] = [];
	let i = 0,
		j = 0;
	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) {
			result.push(left[i]);
			i++;
		} else if (left[i] > right[j]) {
			result.push(right[j]);
			j++;
		}
	}
	for (; i < left.length; ++i) {
		result.push(left[i]);
	}
	for (; j < right.length; ++j) {
		result.push(right[j]);
	}
	return result;
}

const answer = mergeSort(numbers);
console.log(answer);

// time complexity of merge sort
// O(n*log(n))
// SPace=>O(n)
