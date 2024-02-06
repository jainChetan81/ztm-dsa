const numbersMerge = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(arr: number[]): number[] {
	if (arr.length <= 1) return arr;
	const middie = Math.floor(arr.length / 2);
	const left = arr.slice(0, middie);
	const right = arr.slice(middie);
	return mergeImpl(mergeSort(left), mergeSort(right));
}

function mergeImpl(left: number[], right: number[]): number[] {
	const res: number[] = [];
	let [i, j] = [0, 0];
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			res.push(left[i]);
			i++;
		}
		if (right[j] < left[i]) {
			res.push(right[j]);
			j++;
		}
	}
	for (; i < left.length; i++) {
		res.push(left[i]);
	}
	for (; j < right.length; j++) {
		res.push(right[j]);
	}
	return res;
}

const answer = mergeSort(numbersMerge);
console.log(answer);

// time complexity of merge sort
// O(n*log(n))
// SPace=>O(n)
