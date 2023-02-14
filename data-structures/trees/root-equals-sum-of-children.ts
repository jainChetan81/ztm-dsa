// You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.
// Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

// Example 1:
// Input: root = [10,4,6]
// Output: true
// Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
// 10 is equal to 4 + 6, so we return true.

// Example 2:
// Input: root = [5,3,1]
// Output: false
// Explanation: The values of the root, its left child, and its right child are 5, 3, and 1, respectively.
// 5 is not equal to 3 + 1, so we return false.

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
function checkTree(root: TreeNode | null): boolean {
	if (!root) return false;
	const sum = (root?.left?.val ?? 0) + (root?.right?.val ?? 0);
	return sum === root.val;
}
// example 1
const root = new TreeNode(10);
root.left = new TreeNode(4);
root.right = new TreeNode(6);
console.log(checkTree(root)); // true

// example 2
const root2 = new TreeNode(5);
root2.left = new TreeNode(3);
root2.right = new TreeNode(1);
console.log(checkTree(root2)); // false
