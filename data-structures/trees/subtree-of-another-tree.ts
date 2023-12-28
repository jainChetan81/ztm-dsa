// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Example 1:
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Example 2:
// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
	if (!root) return false;
	if (!subRoot) return true;
	function compareTwoTree(left: TreeNode | null, right: TreeNode | null): boolean {
		if (!left && !right) return true;
		if (!left || !right) return false;
		if (left.val !== right.val) return false;
		return compareTwoTree(left.left, right.left) && compareTwoTree(left.right, right.right);
	}
	function traverse(node: TreeNode | null, subRoot: TreeNode | null): boolean {
		if (!node || !subRoot) return false;
		if (node.val === subRoot.val && compareTwoTree(node, subRoot)) return true;
		return traverse(node.left, subRoot) || traverse(node.right, subRoot);
	}
	return traverse(root, subRoot);
}
