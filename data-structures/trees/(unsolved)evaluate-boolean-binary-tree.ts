// You are given the root of a full binary tree with the following properties:
//     Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
//     Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.
// The evaluation of a node is as follows:
//     If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
//     Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.
// Return the boolean result of evaluating the root node.
// A full binary tree is a binary tree where each node has either 0 or 2 children.
// A leaf node is a node that has zero children.

// Example 1:
// Input: root = [2,1,3,null,null,0,1]
// Output: true
// Explanation: The above diagram illustrates the evaluation process.
// The AND node evaluates to False AND True = False.
// The OR node evaluates to True OR False = True.
// The root node evaluates to True, so we return true.

// Example 2:
// Input: root = [0]
// Output: false
// Explanation: The root node is a leaf node and it evaluates to false, so we return false.
//  Definition for a binary tree node.

const VALUE_TYPE = {
	FALSE: 0,
	TRUE: 1,
	OR: 2,
	AND: 3
} as const;
type VALUES = typeof VALUE_TYPE[keyof typeof VALUE_TYPE];
class TreeNode {
	val: VALUES;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: VALUES, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function evaluateTree(root: TreeNode | null): boolean {}

// example 1
const root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(0);
root1.right.right = new TreeNode(1);
console.log(evaluateTree(root1)); // true

// example 2
const root2 = new TreeNode(0);
console.log(evaluateTree(root2)); // false
