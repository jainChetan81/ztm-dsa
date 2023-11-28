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

function checkTree(root: TreeNode | null): boolean {
	if (!root) return false;
	const sum = (root?.left?.val ?? 0) + (root?.right?.val ?? 0);
	return sum === root.val;
}
// example 1
const root11 = new TreeNode(10);
root11.left = new TreeNode(4);
root11.right = new TreeNode(6);
console.log(checkTree(root11)); // true

// example 2
const root22 = new TreeNode(5);
root22.left = new TreeNode(3);
root22.right = new TreeNode(1);
console.log(checkTree(root22)); // false
