// A binary tree is uni-valued if every node in the tree has the same value.
// Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.

// Example 1:
// Input: root = [1,1,1,1,1,null,1]
// Output: true

// Example 2:
// Input: root = [2,2,2,5,2]
// Output: false
function isUnivalTree(root: TreeNode | null): boolean {
	if (!root) return false;
	const value = root.val;
	function traverse(root: TreeNode | null, value: number) {
		if (!root) return true;
		console.log(`root.val: ${root.val}, value: ${value}`);
		if (root.val !== value) return false;
		if (root.left) return traverse(root.left, value);
		if (root.right) return traverse(root.right, value);
		return true;
	}
	return traverse(root, value);
}
let isUnivalTreeTree = new TreeNode(1, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(1, null, new TreeNode(1)));
console.log(`isUnivalTreeTree: ${isUnivalTree(isUnivalTreeTree)}`); // true
isUnivalTreeTree = new TreeNode(2, new TreeNode(2, new TreeNode(5), new TreeNode(2)), new TreeNode(2));
console.log(`isUnivalTreeTree: ${isUnivalTree(isUnivalTreeTree)}`); // false
