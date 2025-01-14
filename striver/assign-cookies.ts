function findContentChildren(g: number[], s: number[]): number {
	g.sort((a, b) => a - b);
	s.sort((a, b) => a - b);
	let totalChild = 0;
	let i = g.length - 1,
		j = s.length - 1;
	while (i >= 0 && j >= 0) {
		console.log(i, g[i], j, s[j]);
		if (g[i] <= s[j]) {
			totalChild++;
			j--;
		}
		i--;
	}
	return totalChild;
}

// console.log(findContentChildren([1, 2, 3], [1, 1]));
// console.log(findContentChildren([1, 2], [1, 2, 3]));
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
