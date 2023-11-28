// *****************QUESTION 2*************
const obj = {
	a: {
		b: (a: number, b: number, c: number) => a + b + c,
		c: (a: number, b: number, c: number) => a + b - c
	},
	d: (a: number, b: number, c: number) => a - b - c
};

// Create a function
function updateData<T extends typeof obj>(obj: T) {
	const object = { ...obj };
	return (a: number, b: number, c: number) => {
		for (let key in object) {
			if (typeof object[key] === "function") {
				// @ts-ignore
				object[key] = object[key]!(a, b, c);
			} else {
				// @ts-ignore
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
function flattenArray(arr: number[] | number[][], stack: number[] = []): number[] {
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			flattenArray(arr[i] as number[], stack);
		}
		if (!Array.isArray(arr[i]) && typeof arr[i] === "number") {
			stack.push(arr[i] as number);
		}
	}
	console.log("stack", stack);
	return stack;
}
// console.log(flattenArray(arrFlat)); //Output: [1,2,3,4,5])

// Implement curriedSum such that all invocations to cs should return answer as 9
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
	let sumSmallerHalf = 0;
	// find the average of the first half and second half
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= avg) {
			sumSmallerHalf += arr[i];
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
			const node = stack1.pop()!;
			console.log(node.val);
			if (node && node.right) {
				stack2.push(node.right);
			}
			if (node && node.left) {
				stack2.push(node.left);
			}
		}

		while (stack2.length) {
			const node = stack2.pop()!;
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
root111.left = new Node(2);
root111.right = new Node(3);
root111.left.left = new Node(7);
root111.left.right = new Node(6);
root111.right.left = new Node(5);
root111.right.right = new Node(4);

// spiralTree(root); // 1,2,3,4,5,6,7

// Input:  arr = [1, 2, 3, 4, 5, 6, 7, 8,]     , X = 3
// Output: [3, 2, 1, 6, 5, 4,  8, 7]
// Stack[1,2,3], i =

// Input:  arr = [1, 2, 3, 4, 5, 6, 7, 8]   ,  X = 5
// Output:  [5, 4, 3, 2, 1, 8, 7, 6]

// Input:  arr = [1, 2, 3, 4, 5, 6]   , X = 1
// Output:  [1, 2, 3, 4, 5, 6]

// Input:  arr = [1, 2, 3, 4, 5, 6, 7, 8]  ,  X = 10
// Output:  [8, 7, 6, 5, 4, 3, 2, 1]

// LRU Caching Least Recently Used

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4
class LRUCache {
	private cache: Map<string, string>;
	private capacity: number;
	constructor(capacity: number) {
		this.cache = new Map();
		this.capacity = capacity;
	}
	get(key: string): string {
		console.log("get", this.cache.keys());
		if (!this.cache.has(key)) return "-1";
		const value = this.cache.get(key)!;
		this.cache.delete(key);
		this.cache.set(key, value);
		return value;
	}
	put(key: string, value: string): void {
		console.log("put", this.cache.keys());
		if (this.cache.has(key)) {
			this.cache.delete(key);
		}
		if (this.cache.size === this.capacity) {
			this.cache.delete(this.cache.keys().next().value);
		}
		this.cache.set(key, value);
	}
}

const lRUCache = new Map();
const itr = lRUCache.keys();
lRUCache.set("1", "1"); // cache is {1=1}
lRUCache.set("2", "2"); // cache is {1=1, 2=2}
// lRUCache.get("2"); // return 1
lRUCache.set("3", "3"); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.set("4", "4"); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get("2"); // returns -1 (not found)
lRUCache.delete("1"); // return -1 (not found)
lRUCache.set("1", "1"); // cache is {1=1}
// lRUCache.get("3"); // return 3
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

// jump-game-ii
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
//     0 <= j <= nums[i] and
//     i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

function jump(nums: number[]): number {
	let totalJumps = 0;
	let currentJumpEnd = 0;
	let farthest = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		farthest = Math.max(farthest, i + nums[i]);
		if (i === currentJumpEnd) {
			totalJumps++;
			currentJumpEnd = farthest;
		}
	}
	return totalJumps;
}
// console.log(jump([2, 3, 1, 1, 4])); //2
// console.log(jump([2, 3, 0, 1, 4])); //2
// console.log(jump([1, 1, 1, 1])); //0

//*** search range

function searchRangeRecursive(arr: number[], target: number, left = 0, right = arr.length - 1): number[] {
	if (right < left) return [-1, -1];
	const mid = Math.floor((left + right) / 2);
	if (arr[mid] === target) {
		let left = mid;
		let right = mid;
		while (arr[left] === target) {
			left--;
		}
		while (arr[right] === target) {
			right++;
		}
		return [left + 1, right - 1];
	}
	if (target > arr[mid]) return searchRangeRecursive(arr, target, mid + 1, right);
	if (target < arr[mid]) return searchRangeRecursive(arr, target, left, mid - 1);
	return [-1, -1];
}
// example 1
console.log(searchRangeRecursive([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
// // example 2
console.log(searchRangeRecursive([5, 7, 7, 8, 8, 10], 6)); // [1, 2]
// // example 3
console.log(searchRangeRecursive([], 0)); //

// ***THREE SUM
function threeSum(nums: number[], k = 0): number[][] {
	nums.sort((a, b) => a - b);
	const result: number[][] = [];
	for (let i = 0; i < nums.length; i++) {
		let left = i + 1;
		let right = nums.length - 1;
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];
			if (sum === k) {
				result.push([nums[i], nums[left], nums[right]]);
				left++;
				while (nums[left] === nums[left - 1] && left < right) left++;
			}
			if (sum > k) right--;
			if (sum < k) left++;
		}
	}
	return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4], 0)); //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1], 0)); //[[-1, 0, 1]]
console.log(threeSum([0, 1, 1])); //[]
console.log(threeSum([0, 0, 0])); //[[0,0,0]]
console.log(threeSum([1, 1, -2])); //[[-2,1,1]]

// An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.
// Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

function changeArray(num: number[]) {
	const result: number[] = [];
	for (let i = 0; i < num.length; i++) {
		if (num[i] % 2 === 0) {
			result.push(num[i] / 2);
		} else {
			return [];
		}
	}
	return result;
}
// Function findDuplicates(nums:number[]):number[] {
// 	nums.sort((a,b)=>a-b)
// Const result:number[]=[]
// Const set=new Set<number>()
// 	for( i=0;i<nums.length-1;++i){
//             		if(set.has(i))continue;
// 		Const supplementNumber=nums[i]*2
// 		Let left=i+1, right=nums.length-1
// Const duplicate=binarySearch(nums,left,right,supplementNumber)
// if(duplicate===-1)return []
// set.add(duplicate)
// result.push(nums[i])
// 	}
// }

// Function binarySearch(nums:number[],left:number,right:number,k:number):number{
// 	if(right<left)return -1
// 	Const mid=Math.floor((left+right)/2)
// if(nums[mid]===k)Return mid
// }

// Example:
// Input: [2,1,2,4,4,8]
// Output: [1,3,4]

// 2,1
// 2,4

// 4,8

// Org: [1,2,3] :[]

// Input: Doubled Arr:  [1,2,4,3,6]
// Output: Org
// Not possible []
// Org: []

// Doubled: [1,2,2,4,3,6]

// Org: [1,2,3]

// Solution:

// Input: [4,2,8,2,4,4]

// You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.
// Return the minimum size of the set so that at least half of the integers of the array are removed.
// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2

// Size <= arr.length/2

function reduceArrayToHalf(nums: number[]): number {
	nums.sort((a, b) => a - b);
	let count = 0;
	let i = 0;
	while (i < nums.length) {
		count++;
		let j = i + 1;
		while (j < nums.length && nums[j] === nums[i]) {
			j++;
		}
		i = j;
	}
	return count;
}

console.log(reduceArrayToHalf([3, 3, 3, 3, 5, 5, 5, 2, 2, 7])); //2

// Function occurrences(nums:number[]):number{
// 	Const map=new Map<number,number>()
// for(0;n-1;++i){
// 		Const value=map.get(nums[i])??0
// map.set(nums[i],value+1)_
// }
// Const freq=[]
// for( const [key,value] of map){
// 	freq.push(value)
// }
// countingSort(freq)
// Let length=nums.length, total=0
// For(n-1; 0 ;i–){
// Const number=stack[i];
// length=length-number
// Total++
// if(length<==nums.length/2)return total
// }
// Return -1
// }

// edge case: what happens when there are duplicates in counting sort
// Function countingSort(nums:number[]):number[]{
// 	Const max=Math.max(...nums)
