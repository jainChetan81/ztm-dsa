// Q. Flatten 2D array
// Q Write a polyfill for JS Array.reduce. Reduce is a higher order function that operates on an array and returns 1 single value.
// Q Implement the following function:sum(1)(2)(3)(4)() returns 10sum(1)() returns 1sum() returns 0
// Q. Anagram strings
// Q. Number of ways where the square of numbers is equal to the product of 2 numbers
//! Q1. LC Med - Unique Binary Search Tree
//! Q2. Trapping Rain Water
//! Q3. Number of SubArrays with odd sum
// Q4. Merge two sorted arrays
//! Q5. Count ways to reach the n’th stair (Climbing Stairs)
//! Q6. Find all permutations https://leetcode.com/problems/permutations/
// Q7. Maximum product subarray https://leetcode.com/problems/maximum-product-subarray/
//! Q8. https://leetcode.com/problems/number-of-ways-to-split-a-string/
// https://leetcode.com/problems/number-of-ways-to-split-a-string/discuss/1851058/Cpp-concept-O(n)-space-complexity-is-O(n)

// Given two arrays of integers nums and index. Your task is to create a target array under the following rules: Initially, the target array is empty. From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array. Repeat the previous step until there are no elements to read in nums and index. Return the target array. It is guaranteed that the insertion operations will be valid.

console.log("============FLATTEN ARRAY============");
function flattenArray(arr: any[], store: any[] = []) {
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			flattenArray(arr[i], store);
		} else store.push(arr[i]);
	}
	return store;
}
console.log(flattenArray([[0, 1], [2, 3, 4], [], [5]]));

console.log("==============POLYFILL==============");
class MyArray<T> extends Array {
	array: T[];
	constructor(arr: T[]) {
		super();
		this.array = arr;
	}
	myReduce(cb: (initialValue: T, current: T, index: number, array: T[]) => T, initialValue: T): T {
		for (let i = 0; i < this.array.length; i++) {
			initialValue = cb(initialValue, this.array[i], i, this.array);
		}
		return initialValue;
	}
}
const newArr = new MyArray([1, 2, 3, 4, 5]);
console.log(newArr.myReduce((acc, curr) => acc + curr, 0));

console.log("==========SUM==================");
function sum(num: number | undefined, total = 0) {
	if (num === undefined || isNaN(num)) return total;
	total += num;
	return (num2: number) => sum(num2, total);
}
console.log(sum(1)(2)(3)(4)());
console.log(sum(1)());
console.log(sum());

console.log("==========ANAGRAM STRINGS==========");
function anagramStrings(str1: string, str2: string): boolean {
	if (str1.length !== str2.length) return false;
	const map = new Map<string, number>();
	const map2 = new Map<string, number>();
	for (let i = 0; i < str1.length; i++) {
		const num = map.get(str1[i]) ?? 0;
		const num2 = map2.get(str2[i]) ?? 0;
		map.set(str1[i], num + 1);
		map2.set(str2[i], num2 + 1);
	}
	for (const [key, value] of map) {
		if (value !== map2.get(key)) return false;
	}
	return true;
}
console.log(anagramStrings("listen", "silent"));
console.log(anagramStrings("triangle", "integral"));
console.log(anagramStrings("spar", "rasp"));
console.log(anagramStrings("spar", "rasa"));

console.log("==========NUM TRIPLETS==========");
function numTriplets(nums1: number[], nums2: number[]): number {
	let count = 0;
	for (let i = 0; i < nums1.length; i++) {
		for (let j = i + 1; j < nums1.length; j++) {
			for (let k = 0; k < nums2.length; k++) {
				if (nums1[i] * nums1[j] === nums2[k] * nums2[k]) {
					count++;
				}
			}
		}
	}
	for (let i = 0; i < nums2.length; i++) {
		for (let j = i + 1; j < nums2.length; j++) {
			for (let k = 0; k < nums1.length; k++) {
				if (nums2[i] * nums2[j] === nums1[k] * nums1[k]) {
					count++;
				}
			}
		}
	}
	return count;
}
console.log(numTriplets([7, 4], [5, 2, 8, 9])); // 1
console.log(numTriplets([1, 1], [1, 1, 1])); // 9
console.log(numTriplets([7, 7, 8, 3], [1, 2, 9, 7])); // 2
console.log(numTriplets([4, 7, 9, 11, 23], [3, 5, 1024, 12, 18])); // 0

console.log(`====================MAX PRODUCT SUBARRAY====================`);
function maxProduct(nums: number[]): number {
	let max = nums[0],
		tempMax = nums[0],
		tempMin = nums[0];
	for (let i = 1; i < nums.length; i++) {
		const currMax = tempMax;
		tempMax = Math.max(nums[i], nums[i] * tempMax, nums[i] * tempMin);
		tempMin = Math.min(nums[i], nums[i] * tempMin, nums[i] * currMax);
		max = Math.max(max, tempMax);
	}
	return max;
}
console.log(maxProduct([2, 3, -2, 4, 8])); // 32
// console.log(maxProduct([-2, 0, -1])); // 0
// console.log(maxProduct([-2])); // -2
// console.log(maxProduct([-2, 3, -4])); // 24
// console.log(maxProduct([2, 3, -2, 4, -2, 3, -2, 4])); // 48
