// You are given two strings s and t. In one step, you can append any character to either s or t.
// Return the minimum number of steps to make s and t anagrams of each other.
// An anagram of a string is a string that contains the same characters with a different (or the same) ordering.

// Example 1:

// Input: s = "leetcode", t = "coats"
// Output: 7
// Explanation:
// - In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
// - In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
// "leetcodeas" and "coatsleede" are now anagrams of each other.
// We used a total of 2 + 5 = 7 steps.
// It can be shown that there is no way to make them anagrams of each other with less than 7 steps.

// Example 2:

// Input: s = "night", t = "thing"
// Output: 0
// Explanation: The given strings are already anagrams of each other. Thus, we do not need any further steps.
// Constraints:

//     1 <= s.length, t.length <= 2 * 105
//     s and t consist of lowercase English letters.

function minSteps2(s: string, t: string): number {
	if (!s || !t) return 0;
	const mapS = new Map<string, number>();
	const mapT = new Map<string, number>();
	for (let i = 0; i < t.length; i++) {
		const value = mapT.get(t[i]) ?? 0;
		mapT.set(t[i], value + 1);
	}
	for (let i = 0; i < s.length; i++) {
		const value = mapS.get(s[i]) ?? 0;
		mapS.set(s[i], value + 1);
	}

	let result = 0;
	// if map S has something A doesn't add that difference to S
	mapT.forEach((valueT, keyT) => {
		const valueS = mapS.get(keyT) ?? 0;
		const difference = valueT - valueS;
		if (difference === 0) return;
		if (difference > 0) {
			// console.log(valueT, keyT, valueS);
			result += difference;
		}
		// mapS.set(keyT, valueT);
	});
	mapS.forEach((valueS, keyS) => {
		const valueT = mapT.get(keyS) ?? 0;
		const difference = valueS - valueT;
		if (difference === 0) return;
		if (difference > 0) {
			// console.log(valueS, keyS, valueT);
			result += difference;
		}
		// mapT.set(keyS, valueS);
	});

	return result;
}

const checkForAnagrams2 = (s: Map<string, number>, t: Map<string, number>): boolean => {
	if (!s || !t || s.size !== t.size) return false;
	for (const [key, value] of s) {
		if (t.get(key) !== value) return false;
	}
	return true;
};

// example 1
console.log(minSteps2("leetcode", "coats"));
// Output: 7
// example 2
console.log(minSteps2("night", "thing"));
// Output: 0

console.log(minSteps2("nxkhahxvqy", "nbhqyoxwnx"));
// output 8