// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	if (!root) return false;
	let flag = true;
	function traverse(root1: TreeNode | null, root2: TreeNode | null) {
		if (!root1 && !root2) return;
		if (root1?.val !== root2?.val) {
			flag = false;
			traverse(null, null);
		}
		traverse(root1?.left ?? null, root2?.left ?? null);
		traverse(root1?.right ?? null, root2?.right ?? null);
	}
	traverse(p, q);
	return flag;
}
