// You have n  tiles, where each tile has one letter tiles[i] printed on it.
// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.
// Example 1:
// Input: tiles = "AAB"
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
// Example 2:
// Input: tiles = "AAABBC"
// Output: 188
// Example 3:
// Input: tiles = "V"
// Output: 1
const resultList = new Set<string>();
function numTilePossibilities(tiles: string): number {
	console.log("tiles", tiles.split(""));
	findAllRandomOccurances(tiles.split(""), 0, "", tiles.length);
	return resultList.size;
}
// findAllRandomOccurances("AAB".split(""), 0, "");
function findAllRandomOccurances(s: string[], pos: number, resultString: string, tilesLength: number) {
	if (pos == tilesLength) {
		resultList.add(resultString);
		return;
	}
	for (let i = 0; i < tilesLength; ++i) {
		if (resultString !== s[i]) {
			findAllRandomOccurances(s, pos + 1, resultString + s[i], tilesLength);
		}
	}
}
// example 1
// console.log(numTilePossibilities("AAB"));
// console.log(resultList);
// // example 2
// console.log(numTilePossibilities("AAABBC"));
// // example 3
// console.log(numTilePossibilities("V"));

function findAllPossibilities(string: string) {
	let allTotal = 0;
	const set = new Set(string.split(""));
	const totalDuplicate = string.length - set.size;
	console.log("totalDuplicate", totalDuplicate);
	for (let i = 1; i <= string.length; i++) {
		let total = 1;
		for (let j = 0; j < i; j++) {
			total *= string.length - j;
		}
		console.log("total:", total);
		allTotal += total;
	}
	console.log("allTotal", allTotal);
}
findAllPossibilities("AAB");
// findAllPossibilities("AAABBC");
// findAllPossibilities("V");
