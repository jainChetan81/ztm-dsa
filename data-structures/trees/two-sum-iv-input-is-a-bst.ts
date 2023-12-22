// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

// Example 1:
// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true

// Example 2:
// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false
function findTarget(root: TreeNode | null, k: number): boolean {
	if (!root) return false;
	const set = new Set<number>();
	let flag = false;
	function traverse(root: TreeNode | null) {
		if (!root) return false;
		if (set.has(k - root.val)) {
			flag = true;
			traverse(null);
		}
		set.add(root.val);
		traverse(root.left);
		traverse(root.right);
	}
	traverse(root);
	return flag;
}
