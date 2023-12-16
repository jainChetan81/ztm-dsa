// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]
function preorderTraversal(root: TreeNode | null): number[] {
	const arr = [];
	const stack = [];
	let temp = root;
	while (temp) {
		arr.push(temp.val);
		if (temp.right) stack.push(temp.right);
		temp = temp.left;
		if (!temp && stack.length) {
			temp = stack.pop()!;
		}
	}
	return arr;
}
