class Graph {
	numberOfNodes: number;
	adjacentList: Record<string, Set<string>>;

	constructor() {
		this.numberOfNodes = 0;
		this.adjacentList = {};
	}
	addVertex(node: string) {
		this.adjacentList[node] = new Set();
		this.numberOfNodes++;
	}
	addEdge(node1: string, node2: string) {
		this.adjacentList[node1].add(node2);
		this.adjacentList[node2].add(node1);
	}
	showConnections() {
		const allNodes = Object.keys(this.adjacentList);
		for (let node of allNodes) {
			let nodeConnections = this.adjacentList[node];
			let connections = "";
			let vertex: string;
			for (vertex of nodeConnections) {
				connections += vertex + " ";
			}
			console.log(node + "-->" + connections);
		}
	}
	hasPath(source: string, destination: string): boolean {
		const visited = new Set<string>();
		return this.hasPathHelper(source, destination, visited);
	}
	hasPathHelper(source: string, destination: string, visited: Set<string>): boolean {
		if (visited.has(source)) {
			return false;
		}
		visited.add(source);
		if (source === destination) {
			return true;
		}
		const neighbors = this.adjacentList[source];
		for (let neighbor of neighbors) {
			if (this.hasPathHelper(neighbor, destination, visited)) {
				return true;
			}
		}
		return false;
	}
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
