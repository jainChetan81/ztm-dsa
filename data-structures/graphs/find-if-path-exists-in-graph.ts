// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
// You want to determine if there is a valid path that exists from vertex source to vertex destination.
// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

// Example 1:
// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2

// Example 2:
// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
	const groups = new Array(n).fill([]);
	const visited = new Array(n).fill(false);
	for (let i = 0; i < edges.length; ++i) {
		const [zero, one] = edges[i];
		groups[zero] = [...groups[zero], one];
		groups[one] = [...groups[one], zero];
	}
	return dfs(source, destination, groups, visited);
}

function dfs(s: number, d: number, group: number[][], visited: boolean[]): boolean {
	if (s === d) return true;
	for (let i = 0; i < group[s].length; ++i) {
		if (visited[group[s][i]]) continue;
		visited[group[s][i]] = true;
		const result = dfs(group[s][i], d, group, visited);
		if (result) return true;
	}
	return false;
}
console.log(
	validPath(
		3,
		[
			[0, 1],
			[1, 2],
			[2, 0]
		],
		0,
		2
	)
);
// true
/*
console.log(
	validPath(
		6,
		[
			[0, 1],
			[0, 2],
			[3, 5],
			[5, 4],
			[4, 3]
		],
		0,
		5
	)
); // false
console.log(
	validPath(
		10,
		[
			[4, 3],
			[1, 4],
			[4, 8],
			[1, 7],
			[6, 4],
			[4, 2],
			[7, 4],
			[4, 0],
			[0, 9],
			[5, 4]
		],
		5,
		9
	)
); // true
console.log(
	validPath(
		10,
		[
			[0, 7],
			[0, 8],
			[6, 1],
			[2, 0],
			[0, 4],
			[5, 8],
			[4, 7],
			[1, 3],
			[3, 5],
			[6, 5]
		],
		7,
		5
	)
); // true
*/
