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

function numTilePossibilities(tiles: string): number {
	const set = new Set<string>();
	for (let i = 0; i < tiles.length; i++) {
		const randomNumbersForIthLength = findAllRandomOccurances(tiles, i + 1);
	}
	return set.size;
}

function findAllRandomOccurances(tile: string, length: number): number {
	// find all random possible strings of length "length" from "tile"
	if(length===0)return 
	return set.size;
}
