function searchBST(root: TreeNode | null, val: number): TreeNode | null {
	if (!root) return null;
	let curr: TreeNode | null = root;
	while (curr !== null) {
		if (curr.val === val) return curr;
		else if (curr.val > val) curr = curr.left;
		else if (curr.val < val) curr = curr.right;
	}
	return null;
}
