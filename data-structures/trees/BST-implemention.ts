class Node {
	right: Node | null;
	left: Node | null;
	value: number;
	constructor(value: number) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

class BinarySearchTree {
	root: null | Node;
	constructor() {
		this.root = null;
	}
	insert(value: number): Node | null {
		const newNode = new Node(value);
		if (!this.root || isNaN(value)) {
			this.root = newNode;
			return this.root;
		}
		let currentNode = this.root;
		// we have to traverse the tree until we find the root node
		while (true) {
			if (currentNode.value === value) return null;
			if (value < currentNode.value) {
				// left
				if (!currentNode.left) {
					currentNode.left = newNode;
					return newNode;
				}
				currentNode = currentNode.left;
			}
			if (value > currentNode.value) {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return newNode;
				}
				currentNode = currentNode.right;
			}
		}
	}
	lookup(value: number): Node | null {
		if (!this.root || isNaN(value)) return null;
		let currentNode = this.root;
		while (true) {
			if (currentNode.value === value) return currentNode;
			if (value < currentNode.value) {
				if (!currentNode.left) return null;
				currentNode = currentNode.left;
			}
			if (value > currentNode.value) {
				if (!currentNode.right) return null;
				currentNode = currentNode.right;
			}
		}
	}
	remove(value: number): Node | null {
		if (!this.root || isNaN(value)) return null;
		let currentNode = this.root;
		let parentNode = null;
		while (true) {
			if (value === currentNode.value) {
				// case I: no right child
				if (parentNode === null) {
					this.root = currentNode.left;
					continue;
				}
				// if parent > current, make current left child a child of parent
				// if parent < current, make left child a right child of parent
				if (currentNode.value < parentNode.value) {
					parentNode.left = currentNode.left;
				}
				if (currentNode.value > parentNode.value) {
					parentNode.right = currentNode.left;
				}
			}
			if (value < currentNode.value) {
				if (!currentNode.left) return null;
				currentNode = currentNode.left;
				parentNode = currentNode;
			}
			if (value > currentNode.value) {
				if (!currentNode.right) return null;
				currentNode = currentNode.right;
				parentNode = currentNode;
			}
		}
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
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(15));
console.log(tree.lookup(151));
console.log("------------");
console.log(tree.remove(170));

function traverse(node: Node | null): Node | null {
	if (!node) return null;
	const tree: Node = { value: node.value, left: null, right: null };
	tree.left = node?.left === null ? null : traverse(node.left);
	tree.right = node?.right === null ? null : traverse(node.right);
	return tree;
}
