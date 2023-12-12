// Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.
// Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

// Example 1:
// Input: root = [1,2,3,4]
// Output: "1(2(4))(3)"
// Explanation: Originally, it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)"

// Example 2:
// Input: root = [1,2,3,null,4]
// Output: "1(2()(4))(3)"
// Explanation: Almost the same as the first example, except we cannot omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.

function tree2str(root: TreeNode | null): string {
	if (!root) return "";
	let str = "";
	function traverse(root: TreeNode | null) {
		if (!root) return;
		console.log(root.val);

		str += "(";
		str += root.val;
		if (!root.left && root.right) str += "()";
		traverse(root.left);
		traverse(root.right);
		str += ")";
	}
	traverse(root);
	// remove first and last char
	// str = str.slice(1, str.length - 1);
	return str;
}

const rootTree = new TreeNode(1);
rootTree.left = new TreeNode(2);
rootTree.right = new TreeNode(3);
rootTree.left.left = new TreeNode(4);
console.log(tree2str(rootTree)); // "1(2(4))(3)"

const rootTree2 = new TreeNode(1);
rootTree2.left = new TreeNode(2);
rootTree2.right = new TreeNode(3);
rootTree2.left.right = new TreeNode(4);
console.log(tree2str(rootTree2)); // "1(2()(4))(3)"
