const rotateArr1: number[] = [1, 2, 3, 4, 5, 6, 7];
const rotateArr2: number[] = [-1, -100, 3, 99];
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
	const result = [...nums];
	for (let i = 0; i < result.length; i++) {
		const rotationIndex = (i + k) % result.length;
		nums[rotationIndex] = result[i];
	}
}
// console.log(arr.join(" "), 7);
// console.log(rotateArray(arr, 7).join(" "));
// console.log(rotateArr1.join(" "), 1);
// rotate(rotateArr1, 3);
// console.log(rotateArr1.join(" ")); //[5,6,7,1,2,3,4]
console.log(rotateArr2.join(" "), 2);
rotate(rotateArr2, 2);
console.log(rotateArr2.join(" ")); //[3,99,-1,-100]
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
		if (temp % 2 === 0) even = even * 10 + temp;
		else odd = odd * 10 + temp;
	}
	console.log(even, odd);
	const maxTenMultiplierOfOdd = Math.pow(10, Math.floor(Math.log10(odd))) * even * 10;
	console.log("maxTenMultiplierOfOdd", maxTenMultiplierOfOdd);
	return maxTenMultiplierOfOdd + odd;
}

// console.log(splitEvenOdd(345678345));
