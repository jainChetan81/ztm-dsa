// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false
function isSymmetric(root: TreeNode | null): boolean {
	if (!root) return false;
	function compareTree(left: TreeNode | null, right: TreeNode | null): boolean {
		if (!left && !right) return true;
		if (!left || !right) return false;
		if (left.val !== right.val) return false;
		return compareTree(left.left, right.right) && compareTree(left.right, right.left);
	}
	return compareTree(root.left, root.right);
}
