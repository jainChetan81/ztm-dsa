// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Example 2:
// Input: root = [1,2]
// Output: 1
class TreeNodeDiameter {
	val: number;
	left: TreeNodeDiameter | null;
	right: TreeNodeDiameter | null;
	constructor(val?: number, left?: TreeNodeDiameter | null, right?: TreeNodeDiameter | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
function diameterOfBinaryTree(root: TreeNodeDiameter | null): number {
	if (!root) return 0;
	let diameter = 0;
	let tempCount = 0;
	function traverse(root: TreeNodeDiameter | null) {
		if (!root) return 0;
		let left = traverse(root.left);
		let right = traverse(root.right);
		tempCount = Math.max(left, right) + 1;
		diameter = Math.max(diameter, left + right);
		return tempCount;
	}
	traverse(root);
	return diameter;
}
const rootDiameter = new TreeNodeDiameter(1);
rootDiameter.left = new TreeNodeDiameter(2);
rootDiameter.right = new TreeNodeDiameter(3);
rootDiameter.left.left = new TreeNodeDiameter(4);
rootDiameter.left.right = new TreeNodeDiameter(5);
// rootDiameter.left.right.left = new TreeNodeDiameter(6);
console.log(diameterOfBinaryTree(rootDiameter)); // 4

const rootDiameter2 = new TreeNodeDiameter(1);
rootDiameter2.left = new TreeNodeDiameter(2);
// console.log(diameterOfBinaryTree(rootDiameter2)); // 1
