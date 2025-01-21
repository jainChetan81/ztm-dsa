function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	const totalLength = nums1.length + nums2.length;
	let cnt = 0;
	const ind2 = Math.floor(totalLength / 2);
	const ind1 = ind2 - 1;
	let ind1Ele = 0;
	let ind2Ele = 0;
	let i = 0,
		j = 0;
	while (i < nums1.length && j < nums2.length) {
		if (nums1[i] < nums2[j]) {
			if (cnt === ind1) ind1Ele = nums1[i];
			if (cnt === ind2) ind2Ele = nums1[i];
			i++;
		} else {
			if (cnt === ind1) ind1Ele = nums2[j];
			if (cnt === ind2) ind2Ele = nums2[j];
			j++;
		}
		cnt++;
	}
	if (i < nums1.length) {
		if (cnt === ind1) ind1Ele = nums1[i];
		if (cnt === ind2) ind2Ele = nums1[i];
		i++;
		cnt++;
	}
	if (j < nums2.length) {
		if (cnt === ind1) ind1Ele = nums2[j];
		if (cnt === ind2) ind2Ele = nums2[j];
		j++;
		cnt++;
	}
	if (totalLength % 2 === 0) return (ind1Ele + ind2Ele) / 2;
	else return ind2Ele;
}

// console.log(findMedianSortedArrays([1, 3], [2])); //2
console.log(findMedianSortedArrays([1, 2], [4, 5, 6])); //4
// console.log(findMedianSortedArrays([0, 0], [0, 0])); //0
// console.log(findMedianSortedArrays([], [1])); //1
