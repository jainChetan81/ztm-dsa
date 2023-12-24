// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

// Example 1:
// Input: root = [4,2,6,1,3]
// Output: 1

// Example 2:
// Input: root = [1,0,48,null,null,12,49]
// Output: 1
class TreeNodeMinDIff {
	val: number;
	left: TreeNodeMinDIff | null;
	right: TreeNodeMinDIff | null;
	constructor(val?: number, left?: TreeNodeMinDIff | null, right?: TreeNodeMinDIff | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
function minDiffInBST(root: TreeNodeMinDIff | null): number {
	if (!root) return 0;
	let min = Infinity;
	let prev = -Infinity;
	const traverse = (node: TreeNodeMinDIff | null) => {
		if (!node) return;
		traverse(node.left);
		min = Math.min(min, node.val - prev);
		prev = node.val;
		traverse(node.right);
	};
	traverse(root);
	return min;
}
const rootMinDiff = new TreeNodeMinDIff(4);
rootMinDiff.left = new TreeNodeMinDIff(2);
rootMinDiff.right = new TreeNodeMinDIff(6);
rootMinDiff.left.left = new TreeNodeMinDIff(1);
rootMinDiff.left.right = new TreeNodeMinDIff(3);
console.log(minDiffInBST(rootMinDiff)); //1

const rootMinDiff2 = new TreeNodeMinDIff(1);
rootMinDiff2.left = new TreeNodeMinDIff(0);
rootMinDiff2.right = new TreeNodeMinDIff(48);
rootMinDiff2.right.left = new TreeNodeMinDIff(12);
rootMinDiff2.right.right = new TreeNodeMinDIff(49);
// console.log(minDiffInBST(rootMinDiff2)); //1
