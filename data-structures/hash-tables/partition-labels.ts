// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.
// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
// Return a list of integers representing the size of these parts.
// Example 1:
// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
// Example 2:
// Input: s = "eccbbbbdec"
// Output: [10]
// Constraints:
//     1 <= s.length <= 500
//     s consists of lowercase English letters.

function partitionLabels(S: string): number[] {
	const map = new Map<string, number>();
	for (let i = 0; i < S.length; i++) {
		map.set(S[i], i);
	}
	const result: number[] = [];
	let startIndex = 0,
		endIndex = 0;

	for (let i = 0; i < S.length; i++) {
		const lastKnownIndex = map.get(S[i])!;
		endIndex = Math.max(endIndex, lastKnownIndex);
		if (endIndex === i) {
			// if the current index is equal to the last known index of the current character
			// that means that the current character is the last character of the current partition and can be sub stringed by now
			const arrayLength = endIndex - startIndex + 1;
			result.push(arrayLength);
			startIndex = i + 1;
		}
	}
	return result;
}

// example 1
console.log(partitionLabels("ababcbacadefegdehijhklij"));
// Output: [9,7,8]
// example 2
console.log(partitionLabels("eccbbbbdec"));
// Output: [10]
