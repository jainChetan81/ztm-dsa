const arr: number[] = [2, 5, 6, 7, 45, 6, 7, 8];
function rotateArray(arr: number[], rotate: number): number[] {
	const temp = [...arr];
	for (let i = 0; i < arr.length; i++) {
		const rotationIndex = (i + rotate) % arr.length;
		temp[rotationIndex] = arr[i];
	}
	return temp;
}
// rotate by mutating the array
function rotate(nums: number[], k: number): void {
	let i = 0;
	let temp = undefined;
	for (let i = nums.length - 1; (i = 0); i--) {
		const rotationIndex = (i + k) % nums.length;
		arr[rotationIndex] = temp ? temp : arr[i];
		if (!temp) temp = arr[rotationIndex];

		console.log(i, ".i, total:", total, "rotationIndex:", rotationIndex);
		i = (rotationIndex + 1) % nums.length;
		console.log("nextI: ", i);
	}
	arr[arr.length - 1] = temp;
}
// console.log(arr.join(" "), 7);
// console.log(rotateArray(arr, 7).join(" "));
console.log(arr.join(" "), 1);
rotate(arr, 1);
console.log(arr.join(" "));
// 2, 5, 6, 7, 45, 6, 7, 8
// 2,2,6,7,45,6,7,8,temp=5
// 2,6,7,45,6,7,8,5,temp=5

// 345678345
// 468435735

// 6;
// 40 + 6;
// 460;
function splitEvenOdd(num: number): number {
	let even = 0;
	let odd = 0;

	while (num !== 0) {
		const temp = num % 10;
		num = Math.floor(num / 10);
		if (temp % 2 === 0) {
			// console.log("temp", temp, "even", even);
			if (even === 0) even = temp;
			else even = even * 10 + temp;
			// console.log("even", even);
		} else {
			odd = odd * 10 + temp;
		}
	}
	// console.log(even, odd);
}

// console.log(splitEvenOdd(345678345));
