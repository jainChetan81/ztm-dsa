// You are given a string word containing lowercase English letters.

// Telephone keypads have keys mapped with distinct collections of lowercase English letters, which can be used to form words by pushing them. For example, the key 2 is mapped with ["a","b","c"], we need to push the key one time to type "a", two times to type "b", and three times to type "c" .

// It is allowed to remap the keys numbered 2 to 9 to distinct collections of letters. The keys can be remapped to any amount of letters, but each letter must be mapped to exactly one key. You need to find the minimum number of times the keys will be pushed to type the string word.

// Return the minimum number of pushes needed to type word after remapping the keys.

// An example mapping of letters to keys on a telephone keypad is given below. Note that 1, *, #, and 0 do not map to any letters.

// Example 1:

// Input: word = "abcde"
// Output: 5
// Explanation: The remapped keypad given in the image provides the minimum cost.
// "a" -> one push on key 2
// "b" -> one push on key 3
// "c" -> one push on key 4
// "d" -> one push on key 5
// "e" -> one push on key 6
// Total cost is 1 + 1 + 1 + 1 + 1 = 5.
// It can be shown that no other mapping can provide a lower cost.
// Example 2:

// Input: word = "xyzxyzxyzxyz"
// Output: 12
// Explanation: The remapped keypad given in the image provides the minimum cost.
// "x" -> one push on key 2
// "y" -> one push on key 3
// "z" -> one push on key 4
// Total cost is 1 * 4 + 1 * 4 + 1 * 4 = 12
// It can be shown that no other mapping can provide a lower cost.
// Note that the key 9 is not mapped to any letter: it is not necessary to map letters to every key, but to map all the letters.
// Example 3:

// Input: word = "aabbccddeeffgghhiiiiii"
// Output: 24
// Explanation: The remapped keypad given in the image provides the minimum cost.
// "a" -> one push on key 2
// "b" -> one push on key 3
// "c" -> one push on key 4
// "d" -> one push on key 5
// "e" -> one push on key 6
// "f" -> one push on key 7
// "g" -> one push on key 8
// "h" -> two pushes on key 9
// "i" -> one push on key 9
// Total cost is 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 2 * 2 + 6 * 1 = 24.
// It can be shown that no other mapping can provide a lower cost.
//
const multiplier = (totalFirst: number = 1) => {
  if (0 <= totalFirst && totalFirst <= 8) return 1;
  if (8 < totalFirst && totalFirst <= 16) return 2;
  if (16 <= totalFirst && totalFirst < 24) return 3;
  return 4;
};
function minimumPushes(word: string): number {
  const map = new Map<string, number>();
  const mapReverse = new Map<number, Set<string>>();
  let total = 0;
  let totalFirst = 0;
  for (let i = 0; i < word.length; ++i) {
    const prev = map.get(word[i]) ?? 0;
    map.set(word[i], prev + 1);
  }
  for (const [key, value] of map) {
    const prev = mapReverse.get(value) ?? new Set<string>();
    prev.add(key);
    mapReverse.set(value, prev);
  }
  // console.log(map);
  // console.log(mapReverse);

  const arr = Array.from(mapReverse).sort((a, b) => b[0] - a[0]);
  arr.forEach((value, index) => {
    value[1].forEach((key) => {
      totalFirst++;
      const multiplierValue = multiplier(totalFirst);
      total += arr[index][0] * multiplierValue;
      // console.log(key, totalFirst, arr[index][0], multiplierValue, total);
    });
  });
  return total;
}
console.log(minimumPushes("abcde")); // 5
console.log(minimumPushes("xyzxyzxyzxyz")); // 12
console.log(minimumPushes("aabbccddeeffgghhiiiiii")); // 24
console.log(minimumPushes("bvyfdneojulitxzhkaswgrmc")); // 49
