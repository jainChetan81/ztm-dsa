// *******BFS********
// if the node is close to parent
// if the tree is very deep and the solutions are rare
//? finding the shortest path
// time complexity O(n)
// memory is O(n)
// *********DFS*********
// if the tree is very wide, we need something that requires less memory
// if the solutions are frequent but very deep in tree
//? determining whether a path exists between two nodes or if the node exists
// time complexity O(n)
// Space Complexity O(h), h is the max depth of the tree
class NodeBfsDfs {
  right: NodeBfsDfs | null;
  left: NodeBfsDfs | null;
  value: number;
  constructor(value: number) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
	root: null | NodeBfsDfs;
	constructor() {
		this.root = null;
	}
	insert(value: number) {
		const newNode = new NodeBfsDfs(value);
		if (root === null) {
			this.root = newNode;
			return this.root;
		}
		let temp = this.root;
		while (temp?.value) {
			if (temp.value === value) return null;

			if (value < temp?.value) {
				if (temp.left === null) {
					temp.left = newNode;
					return newNode;
				} else temp = temp.left;
			}
			if (value >= temp.value) {
				if (temp.right === null) {
					temp.right = newNode;
					return newNode;
				} else temp = temp.right;
			}
		}
		return newNode;
	}
	lookup(value: number) {
		let temp = this.root;
		while (temp) {
			if (value === temp.value) return temp;
			if (value < temp.value) temp = temp.left;
			else temp = temp.right;
		}
		return null;
	}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverseBfsDfs1(tree.root)));
console.log(tree.lookup(15));
console.log(tree.lookup(151));
console.log("------------");

function traverseBfsDfs1(node: NodeBfsDfs | null): NodeBfsDfs | null {
  if (!node) return null;
  const tree: NodeBfsDfs = { value: node.value, left: null, right: null };
  tree.left = node?.left === null ? null : traverseBfsDfs1(node.left);
  tree.right = node?.right === null ? null : traverseBfsDfs1(node.right);
  return tree;
}
