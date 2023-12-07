// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

class TreeNodeInorder {
	val: number;
	left: TreeNodeInorder | null;
	right: TreeNodeInorder | null;
	constructor(val?: number, left?: TreeNodeInorder | null, right?: TreeNodeInorder | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function inorderTraversal(root: TreeNodeInorder | null): number[] {
	const stack = [];
	const arr = [];
	let temp = root;
	while (temp || stack.length !== 0) {
		while (temp) {
			stack.push(temp);
			temp = temp.left;
		}
		const node = stack.pop();
		if (node) arr.push(node.val);
		temp = node ? node.right : null;
	}
	return arr;
}

let rootinorder = new TreeNodeInorder(1, null, new TreeNodeInorder(2, new TreeNodeInorder(3)));
console.log(inorderTraversal(rootinorder)); // [1,3,2]
