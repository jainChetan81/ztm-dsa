// Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

// Example 1:
// Input: root1 = [2,1,4], root2 = [1,0,3]
// Output: [0,1,1,2,3,4]

// Example 2:
// Input: root1 = [1,null,8], root2 = [8,1]
// Output: [1,1,8,8]

// Definition for a binary tree node.
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function getAllElements(root1: TreeNode | null, root2: TreeNode | null, list: number[] = []): number[] {
	const getAllNodes = (root: TreeNode | null) => {
		if (root) {
			list.push(root.val);
			getAllNodes(root.left);
			getAllNodes(root.right);
		}
	};

	getAllNodes(root1);
	getAllNodes(root2);

	return quickSort(list);
}

type A = number[];
type N = number;
function quickSort(array: A, left: N = 0, right: N = array.length - 1) {
	let pivot;
	let partitionIndex;

	if (left < right) {
		pivot = right;
		partitionIndex = partition(array, pivot, left, right);
		quickSort(array, left, partitionIndex - 1);
		quickSort(array, partitionIndex + 1, right);
	}
	return array;
}

function partition(array: A, pivot: N, left: N, right: N) {
	const pivotValue = array[pivot];
	let partitionIndex = left;

	for (let i = left; i < right; i++) {
		if (array[i] < pivotValue) {
			swap(array, i, partitionIndex);
			partitionIndex++;
		}
	}
	swap(array, right, partitionIndex);
	return partitionIndex;
}

function swap(array: A, firstIndex: N, secondIndex: N) {
	[array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
}
