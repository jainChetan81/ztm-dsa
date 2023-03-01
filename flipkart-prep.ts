// Given a sorted array Arr of size N and a number X, you need to find the number of occurrences of X in Arr.
// Example 1:
// Input:
// N = 7, X = 2
// Arr[] = {1, 1, 2, 2, 2, 2, 3}
// Output: 4
// Explanation: 2 occurs 4 times in the
// given array.

// Example 2:
// Input:
// N = 7, X = 4
// Arr[] = {1, 1, 2, 2, 2, 2, 3}
// Output: 0
// Explanation: 4 is not present in the
// given array.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function count() which takes the array of integers arr, n, and x as parameters and returns an integer denoting the answer.
// If x is not present in the array (arr) then return 0.

// Expected Time Complexity: O(logN)
// Expected Auxiliary Space: O(1)
console.log("==============Search Range====================");
function searchRange(arr: number[], target: number): number[] {
	// let left = 0;
	// let right = arr.length - 1;
	// let result = [];
	// while (left <= right) {
	// 	const mid = Math.floor((left + right) / 2);
	// 	if (arr[mid] === target) {
	// 		result.push(mid);
	// 		let left = mid - 1;
	// 		let right = mid + 1;
	// 		while (arr[left] === target) {
	// 			result.push(left);
	// 			left--;
	// 		}
	// 		while (arr[right] === target) {
	// 			result.push(right);
	// 			right++;
	// 		}
	// 		break;
	// 	} else if (arr[mid] > target) {
	// 		right = mid - 1;
	// 	} else {
	// 		left = mid + 1;
	// 	}
	// }
	// return result;

	let left = 0,
		right = arr.length - 1;

	while (left <= right) {
		const mid = Math.floor((right + left) / 2);
		if (arr[mid] > target) {
			right = mid - 1;
		} else if (arr[mid] < target) {
			left = mid + 1;
		} else if (arr[mid] === target) {
			left = mid;
			right = mid;
			while (arr[left] === target) {
				left--;
			}
			while (arr[right] === target) {
				right++;
			}
			return [left + 1, right - 1];
		}
	}
	return [-1, -1];
}
// example 1
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
// // example 2
console.log(searchRange([5, 7, 7, 8, 8, 10], 7)); // [1, 2]
// // example 3
console.log(searchRange([], 0)); // [-1, -1]

// *****************QUESTION 2*************
const obj = {
	a: {
		b: (a: number, b: number, c: number) => a + b + c,
		c: (a: number, b: number, c: number) => a + b - c
	},
	d: (a: number, b: number, c: number) => a - b - c
};

// Create a function
function updateData<T extends Object>(obj: T) {
	const object = { ...obj };
	return (a: number, b: number, c: number) => {
		for (let key in object) {
			if (typeof object[key] === "function") {
				object[key] = object[key](a, b, c);
			} else {
				object[key] = updateData(object[key])(a, b, c);
			}
		}
		return object;
	};
}

// console.log(updateData(obj)(1, 1, 1)); //{
// 	a : {
// 		b : 3,
// 		c : 1
// 		}
// 		d: -1
// },

// return the missing number from 2 arrays
// [1,2,3,4,5,6,7,8,9,10] [1,2,3,4,5,6,8,9,10]
// return 7

function returnMissingNumber(arr1: number[], arr2: number[]): number {
	let missingNumber = 0;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			missingNumber = arr1[i];
			break;
		}
	}
	return missingNumber;
}

// console.log(returnMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 7
const arrFlat = [[1, 2], [[3, 4]], [5]];
function flattenArray(arr: (number[] | number[][])[], stack: number[] = []): number[] {
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			flattenArray(arr[i], stack);
		} else {
			stack.push(arr[i]);
		}
	}
	console.log("stack", stack);
	return stack;
}
// console.log(flattenArray(arrFlat)); //Output: [1,2,3,4,5])

// Implement curriedSum such that all invokations to cs should return answer as 9
// Gave a hint: fn.length gives no of arguments that function takes . eg: in our case add.length = 3
function curriedSum(...a: number[]) {
	// console.log(a);
	let result = 0;
	for (let i = 0; i < a.length; i++) {
		result += a[i];
	}
	if (a.length === 3) console.log(result);
	// return result
	return (...b: number[]) => {
		if (!b) return result;
		// console.log(b);
		for (let i = 0; i < b.length; i++) {
			result += b[i];
		}
		console.log(result);
	};
}
// const cs = curriedSum(add);
// console.log(cs, add.length)
// console.log("---------- curriedSum");
// curriedSum(2)(3, 4);
// curriedSum(2, 3, 4);
// curriedSum(2, 3)(4);

//find missing number in array
// console.log("====================== missingNumbers ");
function missingNumbers(arr: number[]): number {
	let totalSum = ((arr.length + 1) * (arr.length + 2)) / 2;
	for (let i = 0; i < arr.length; i++) {
		totalSum -= arr[i];
	}
	return totalSum;
}
// console.log(missingNumbers([1, 4, 3, 6, 2])); //5
function twoMissingNumbers(arr: number[]): [number, number] {
	let totalSum = ((arr.length + 2) * (arr.length + 3)) / 2;
	let totalMultiplication = 1;
	for (let i = 0; i < Array(arr.length + 2).fill(0).length; i++) {
		totalMultiplication *= i + 1;
	}
	for (let i = 0; i < arr.length; i++) {
		totalSum -= arr[i];
		totalMultiplication /= arr[i];
	}
	const avg = totalSum / 2;
	let sumSmallerHalf = 0,
		sumGreaterHalf = 0;
	// find the average of the first half and second half
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= avg) {
			sumSmallerHalf += arr[i];
		} else {
			sumGreaterHalf += arr[i];
		}
	}
	const totalSmallerHalf = ((arr.length + 1) * arr.length) / 2;
	const smallerElement = totalSmallerHalf - sumSmallerHalf;

	return [smallerElement, totalSum - smallerElement];
}
// console.log(twoMissingNumbers([1, 4, 6, 2])); //[3,5]

// Sort an array of 0s, 1s, and 2s using the Pointer Approach:
// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}
// Input: {0, 2, 1, 2, 0}
// Output: {0, 0, 1, 2, 2}
function sortArray(arr: number[]): number[] {
	let low = 0,
		mid = 0,
		high = arr.length - 1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[mid] === 0) {
			[arr[low], arr[mid]] = [arr[mid], arr[low]];
			low++;
			mid++;
		} else if (arr[mid] === 1) {
			mid++;
		} else if (arr[mid] === 2) {
			[arr[mid], arr[high]] = [arr[high], arr[mid]];
			high--;
		}
	}
	return arr;
}
// console.log("=========== SORT ARRAY ===========");

// example 1
// console.log(sortArray([0, 1, 2, 0, 1, 2])); //[0, 0, 1, 1, 2, 2]
// example 2
// console.log(sortArray([0, 2, 1, 2, 0])); //[0, 0, 1, 2, 2]

//Given a string, reverse only the alphabets keeping rest of the character at the same place

function reverseString(str: string): string {
	const stack = [];
	for (let i = 0; i < str.length; i++) {
		if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
			stack.push(str[i]);
		}
	}
	for (let i = 0; i < str.length; i++) {
		if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
			const element = stack.pop();
			str = str.slice(0, i) + element + str.slice(i + 1);
		}
	}
	return str;
}
// console.log("=========== REVERSE STRING ===========");

// console.log(reverseString("a,b$c")); // c,b$a
// console.log(reverseString("Ab,c,de!$")); // ed,c,bA!$

// write a function to iterate through json and print all values, that JSON could have obj, array, string or number  like [[[[{a:{b:c:1}}}]]],2,3], {a:1,b:{c:2},d:[1,2]}
// console.log("=========== ITERATE JSON ===========");

function iterateJson(json: any): void {
	// console.log("=========== ===========,", json);
	if (Array.isArray(json)) {
		for (let i = 0; i < json.length; i++) {
			iterateJson(json[i]);
		}
	}
	if (!Array.isArray(json) && typeof json === "object") {
		for (const key in json) {
			iterateJson(json[key]);
		}
	}
	if (["number", "string", "boolean"].includes(typeof json)) {
		console.log(json);
	}
}

// iterateJson([[[[{ a: { b: { c: 1 } } }]]], 2, 3]); // 1,2,3
// iterateJson({ a: 3, b: { c: 5 }, d: [1, 2] }); // 1,2,1,2
// iterateJson([1, 2, 3]); // 1,2,1,2

// binary tree, print all nodes in a spiral
// Given a binary tree, print nodes in spiral order. For below tree, output should be 1, 2, 3, 4, 5, 6, 7.
//         1
//       /   \
//     2       3
//   /   \   /   \
//  7     6 5     4
// console.log("=========== SPIRAL TREE ===========");

class Node {
	left: Node | null;
	right: Node | null;
	val: number;
	constructor(public value: number) {
		this.val = value;
		this.left = null;
		this.right = null;
	}
}

function spiralTree(root: Node): void {
	const stack1: Node[] = [];
	const stack2: Node[] = [];
	stack1.push(root);

	while (stack1.length || stack2.length) {
		// console.log("=========== ===========", stack1, stack2);
		while (stack1.length) {
			const node = stack1.pop();
			console.log(node.val);
			if (node && node.right) {
				stack2.push(node.right);
			}
			if (node && node.left) {
				stack2.push(node.left);
			}
		}

		while (stack2.length) {
			const node = stack2.pop();
			console.log(node.val);
			if (node.left) {
				stack1.push(node.left);
			}
			if (node.right) {
				stack1.push(node.right);
			}
		}
	}
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(7);
root.left.right = new Node(6);
root.right.left = new Node(5);
root.right.right = new Node(4);

// spiralTree(root); // 1,2,3,4,5,6,7
