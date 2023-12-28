// Given the root of a binary tree, return the sum of all left leaves.
// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

// Example 2:
// Input: root = [1]
// Output: 0
class TreeNodeSumOfLeaved {
	val: number;
	left: TreeNodeSumOfLeaved | null;
	right: TreeNodeSumOfLeaved | null;
	constructor(val?: number, left?: TreeNodeSumOfLeaved | null, right?: TreeNodeSumOfLeaved | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
function sumOfLeftLeaves(root: TreeNodeSumOfLeaved | null): number {
	if (!root) return 0;
	let sum = 0;
	let prev = root;
	function traverse(node: TreeNodeSumOfLeaved | null) {
		if (!node) return 0;
		if (node.left || node.right) prev = node;
		if (node.left) traverse(node.left);
		if (!node.left && !node.right && prev.left === node) {
			console.log("node", node.val);
			console.log("prev", prev.val);
			sum += node.val;
		}
		// prev = node;
		if (node.right) traverse(node.right);
	}
	traverse(root);
	return sum;
}

const rootSumOfLeaves = new TreeNodeSumOfLeaved(3);
rootSumOfLeaves.left = new TreeNodeSumOfLeaved(9);
rootSumOfLeaves.right = new TreeNodeSumOfLeaved(20);
rootSumOfLeaves.right.left = new TreeNodeSumOfLeaved(15);
rootSumOfLeaves.right.right = new TreeNodeSumOfLeaved(7);
console.log(sumOfLeftLeaves(rootSumOfLeaves)); // 24
