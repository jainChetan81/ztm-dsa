// shift all the zeros at the end of the array of whole number array
const nums = [0, 5, 6, 0, 0, 7, 0];
// 1st loop

export function shiftArray(arr: number[]): number[] {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		const temp = arr[count];
		if (arr[i] !== 0) {
			arr[count] = arr[i];
		}
		if (arr[i] !== 0) {
			count++;
			arr[i] = temp;
		}
	}
	return arr;
}
// console.log(shiftArray(nums)); //[5,6,7,0,0,0,0]

// convert roman number to integer
const romanNumeral = {
	I: 1,
	V: 5,
	X: 10
} as const;

export function romanToInteger(roman: string): number {
	let result = 0;
	for (let i = 0; i < roman.length; i++) {
		const current = roman[i];
		const next = roman[i + 1];
		const currentNum = romanNumeral[current];
		const nextNum = romanNumeral[next];
		if (currentNum < nextNum) {
			result += nextNum - currentNum;
			i++;
		} else {
			result += currentNum;
		}
	}

	return result;
}

console.log(romanToInteger("XIV")); //14
