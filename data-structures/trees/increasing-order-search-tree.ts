// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.
function increasingBST(root: TreeNode | null): TreeNode | null {
	if (!root) return null;
	const arr: number[] = [];
	const inorder = (root: TreeNode | null) => {
		if (!root) return;
		inorder(root.left);
		arr.push(root.val);
		inorder(root.right);
	};
	inorder(root);
	const newRoot = new TreeNode(arr[0]);
	let temp = newRoot;
	for (let i = 1; i < arr.length; i++) {
		temp.right = new TreeNode(arr[i]);
		temp = temp.right;
	}
	return newRoot;
}
