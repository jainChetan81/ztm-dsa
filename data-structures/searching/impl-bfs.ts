// *******BFS********
// if the node is close to parent
// if the tree is very deep and the solutions are rare
// finding the shortest path
// time complexity O(n)
// memory is O(n)
// *********DFS*********
// if the tree is very wide, we need something that requires less memory
// if the solutions are frequent but very deep in tree
// determining whether a path exists between two nodes
// time complexity O(n)
// Space Complexity O(h), h is the max depth of the tree
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
	breadthFirstSearch(): Node[] {
		if (!this.root) return [];
		let currentNode = this.root;
		const list: Node[] = [];
		const queue = [];
		queue.push(currentNode);
		while (queue.length > 0) {
			currentNode = queue.shift() as Node;
			list.push(currentNode);
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}
		return list;
	}
	breadthFirstSearchRecursive(queue = [this.root!], list: Node[] = []): Node[] {
		if (!this.root) return [];
		if (!queue.length) return list;
		const currentNode = queue.shift() as Node;
		list.push(currentNode);
		if (currentNode.left) queue.push(currentNode.left);
		if (currentNode.right) queue.push(currentNode.right);
		return this.breadthFirstSearchRecursive(queue, list);
	}
	depthFirstSearchInOrder(): Node[] {
		if (!this.root) return [];
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

function traverse(node: Node | null): Node | null {
	if (!node) return null;
	const tree: Node = { value: node.value, left: null, right: null };
	tree.left = node?.left === null ? null : traverse(node.left);
	tree.right = node?.right === null ? null : traverse(node.right);
	return tree;
}
