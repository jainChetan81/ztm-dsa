// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

// Example 1:
// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Example 2:
// Input: root = [1]
// Output: ["1"]

//  * Definition for a binary tree node.
class TreeNodeBinaryPath {
	val: number;
	left: TreeNodeBinaryPath | null;
	right: TreeNodeBinaryPath | null;
	constructor(val?: number, left?: TreeNodeBinaryPath | null, right?: TreeNodeBinaryPath | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
function binaryTreePaths(root: TreeNode | null): string[] {
	if (!root) return [];
	const result: string[] = [];
	function traverse(root: TreeNode, path: string) {
		if (!root.left && !root.right) {
			result.push(path + root.val);
			return;
		}
		path = path + root.val + "->";
		if (root.left) traverse(root.left, path);
		if (root.right) traverse(root.right, path);
	}
	traverse(root, "");

	return result;
}

const rootBinaryPath = new TreeNodeBinaryPath(1, new TreeNodeBinaryPath(2, null, new TreeNodeBinaryPath(5)), new TreeNodeBinaryPath(3));
console.log(binaryTreePaths(rootBinaryPath)); //["1->2->5","1->3"]
// [1,2,3,5,6]
const rootBinaryPath2 = new TreeNodeBinaryPath(
	1,
	new TreeNodeBinaryPath(2, new TreeNodeBinaryPath(5), new TreeNodeBinaryPath(6)),
	new TreeNodeBinaryPath(3)
);
console.log(binaryTreePaths(rootBinaryPath2)); //["1->2->5","1->2->6","1->3"]);
