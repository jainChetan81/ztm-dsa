// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.
// Example 1:
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

// Example 2:
// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.

// Example 3:
// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	if (!root) return false;
	let result = false;
	function traverse(node: TreeNode | null, sum: number): void {
		if (!node) return;
		sum += node.val;
		if (!node.left && !node.right && sum === targetSum) result = true;
		traverse(node.left, sum);
		traverse(node.right, sum);
	}
	traverse(root, 0);
	return result;
}
const rootHasPathSum = new TreeNode(
	5,
	new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
	new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);
console.log(hasPathSum(rootHasPathSum, 22)); // true
