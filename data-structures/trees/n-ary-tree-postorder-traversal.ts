// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
// Example 1:

// Input: root = [1,null,3,2,4,null,5,6]
// Output: [5,6,3,2,4,1]

// Definition for node.
class NodeAary {
	val: number;
	children: NodeAary[];
	constructor(val?: number) {
		this.val = val === undefined ? 0 : val;
		this.children = [];
	}
}

function postorder(root: NodeAary | null): number[] {
	if (!root) return [];
	const arr: number[] = [];
	const traverse = (root: NodeAary | null) => {
		if (!root) return;
		for (let i = 0; i < root.children.length; i++) {
			traverse(root.children[i]);
		}
		arr.push(root.val);
	};
	traverse(root);
	return arr;
}
