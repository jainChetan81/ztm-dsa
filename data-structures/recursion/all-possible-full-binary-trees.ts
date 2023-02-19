// Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.
// Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.
// A full binary tree is a binary tree where each node has exactly 0 or 2 children.

// Example 1:
// Input: n = 7
// Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]

// Example 2:
// Input: n = 3
// Output: [[0,0,0]]

// Constraints:
//     1 <= n <= 20

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
function allPossibleFBT(n: number): Array<TreeNode> {
	if (n % 2 === 0) return [];
	if (n === 1) return [new TreeNode(0)];
	const result: TreeNode[] = [];
	for (let i = 1; i < n; i += 2) {
		const left = allPossibleFBT(i);
		const right = allPossibleFBT(n - 1 - i);
		for (let l = 0; l < left.length; l++) {
			for (let r = 0; r < right.length; r++) {
				const newTree = new TreeNode(0);
				newTree.left = left[l];
				newTree.right = right[r];
				result.push(newTree);
			}
		}
	}
	return result;
}

// example 1
console.log(allPossibleFBT(7).length); // [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
// example 2
console.log(allPossibleFBT(3)); // [[0,0,0]]
