// You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

// For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

// The test cases are generated so that the answer fits in a 32-bits integer.

function sumRootToLeaf(root: TreeNode | null): number {
	let str = "";
	let sum = 0;
	function dfs(root: TreeNode | null) {
		if (!root) return;
		str += root.val;
		if (!root.left && !root.right) {
			sum += parseInt(str, 2);
		}
		dfs(root.left);
		dfs(root.right);
		str = str.slice(0, -1);
	}
	dfs(root);
	return sum;
}
