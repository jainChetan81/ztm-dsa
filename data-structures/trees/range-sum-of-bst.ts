// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

// Example 1:
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
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
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
	if (!root) return 0;
	let sum = 0;
	if (root.val >= low && root.val <= high) sum += root.val;
	if (root.val > low) sum += rangeSumBST(root.left, low, high);
	if (root.val < high) sum += rangeSumBST(root.right, low, high);
	return sum;
}

// example 1
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(18);
console.log(rangeSumBST(root, 7, 15)); // 32

// example 2
const root2 = new TreeNode(10);
root2.left = new TreeNode(5);
root2.right = new TreeNode(15);
root2.left.left = new TreeNode(3);
root2.left.right = new TreeNode(7);
root2.right.left = new TreeNode(13);
root2.right.right = new TreeNode(18);
root2.left.left.left = new TreeNode(1);
root2.left.right.left = new TreeNode(6);
console.log(rangeSumBST(root2, 6, 10)); // 23
