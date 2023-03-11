// Reverse a given string by words. Without using inbuilt functions like split, reverse, join.
// Let str = ‘hello how are you;
// Output should be ‘you are how hello’;

function reverseString(str: string): string {
	let tempStr = "";
	let final = "";
	for (let i = 0; i < str.length; i++) {
		if (str[str.length - 1 - i] === " " || i === str.length - 1) {
			if (i === str.length - 1) tempStr += str[str.length - 1 - i];
			let temp = "";
			for (let j = 0; j < tempStr.length; j++) {
				temp += tempStr[tempStr.length - 1 - j];
			}
			final += temp + " ";
			tempStr = "";
		} else tempStr += str[str.length - 1 - i];
	}
	return final;
}
console.log(reverseString("hello are how you"));

class MyArray<T> extends Array {
	arr: T[];
	constructor(array: T[]) {
		super();
		this.arr = array;
	}
	findMedianIndex = () => {
		const median = this.arr.length / 2;
		return median;
	};
}