// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

class TreeNodeMax {
	val: number;
	left: TreeNodeMax | null;
	right: TreeNodeMax | null;
	constructor(val?: number, left?: TreeNodeMax | null, right?: TreeNodeMax | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function maxDepth(root: TreeNodeMax | null): number {
	if (!root) return 0;
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
