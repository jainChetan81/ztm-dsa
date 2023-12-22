// Given the root of a binary tree, return the sum of every tree node's tilt.
// The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values. If a node does not have a left child, then the sum of the left subtree node values is treated as 0. The rule is similar if the node does not have a right child.
class TreeNodeTilt {
	val: number;
	left: TreeNodeTilt | null;
	right: TreeNodeTilt | null;
	constructor(val?: number, left?: TreeNodeTilt | null, right?: TreeNodeTilt | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
function findTilt(root: TreeNodeTilt | null): number {
	let tiltSum = 0;

	function traverse(node: TreeNodeTilt | null): number {
		if (!node) return 0;
		console.log("val", node.val);
		const left = traverse(node.left);
		console.log("left", left);

		const right = traverse(node.right);
		console.log("right", right);
		tiltSum += Math.abs(left - right);
		return left + right + node.val;
	}
	traverse(root);
	return tiltSum;
}
const rootTilt = new TreeNodeTilt(4);
rootTilt.left = new TreeNodeTilt(2);
rootTilt.right = new TreeNodeTilt(9);
rootTilt.left.left = new TreeNodeTilt(3);
rootTilt.left.right = new TreeNodeTilt(5);
rootTilt.right.right = new TreeNodeTilt(7);
console.log(findTilt(rootTilt)); //15
