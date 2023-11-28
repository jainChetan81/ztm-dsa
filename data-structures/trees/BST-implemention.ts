class TreeNode1 {
	right: TreeNode1 | null;
	left: TreeNode1 | null;
	value: number;
	constructor(value: number) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

class BinarySearchTree2 {
	root: null | TreeNode1;
	constructor() {
		this.root = null;
	}
	insert(value: number): TreeNode1 | null {
		if (isNaN(value)) return null;
		if (!this.root) {
			this.root = new TreeNode1(value);
			return this.root;
		}
		let currentNode: TreeNode1 | null = this.root;
		const newNode = new TreeNode1(value);
		while (currentNode) {
			if (value === currentNode.value) return null;
			if (value < currentNode.value) {
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
		return null;
	}
	lookup(value: number): TreeNode1 | null {
		if (!this.root || isNaN(value)) return null;
		let currentNode: TreeNode1 | null = this.root;
		while (currentNode) {
			if (value === currentNode.value) return currentNode;
			if (value < currentNode.value) currentNode = currentNode.left;
			else currentNode = currentNode.right;
		}
		return null;
	}
	remove(value: number) {
		if (!this.root) return false;

		let currentNode: TreeNode1 | null = this.root;
		let parentNode = null;
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				//We have a match, get to work!
				//Option 1: No right child:
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						//if parent > current value, make current left child a child of parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left;

							//if parent < current value, make left child a right child of parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.left;
						}
					}

					//Option 2: Right child which doesnt have a left child
				} else if (currentNode.right.left === null) {
					currentNode.right.left = currentNode.left;
					if (parentNode === null) {
						this.root = currentNode.right;
					} else {
						//if parent > current, make right child of the left the parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right;

							//if parent < current, make right child a right child of the parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}

					//Option 3: Right child that has a left child
				} else {
					//find the Right child's left most child
					let leftmost = currentNode.right.left;
					let leftmostParent = currentNode.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}

					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right;
					leftmost.left = currentNode.left;
					leftmost.right = currentNode.right;

					if (parentNode === null) {
						this.root = leftmost;
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftmost;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftmost;
						}
					}
				}
				return true;
			}
		}
	}
}

let tree2 = new BinarySearchTree2();
tree2.insert(9);
tree2.insert(4);
tree2.insert(6);
tree2.insert(20);
tree2.insert(170);
tree2.insert(15);
tree2.insert(1);
console.log(JSON.stringify(traverse(tree2.root)));
console.log(tree2.lookup(15));
console.log(tree2.lookup(151));
console.log("------------");
console.log(tree2.remove(170));

function traverse(node: TreeNode1 | null): TreeNode1 | null {
	if (!node) return null;
	const tree: TreeNode1 = { value: node.value, left: null, right: null };
	tree.left = node?.left === null ? null : traverse(node.left);
	tree.right = node?.right === null ? null : traverse(node.right);
	return tree;
}
