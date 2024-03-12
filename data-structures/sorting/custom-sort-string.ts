// You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.
// Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.
// Return any permutation of s that satisfies this property.
// Example 1:
// Input: order = "cba", s = "abcd"
// Output: "cbad"
// Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".
// Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
// Example 2:
// Input: order = "bcafg", s = "abcd"
// Output: "bcad"
// Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.
// Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. The output "bcad" correctly follows this rule. Other arrangements like "bacd" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.
function customSortString(order: string, s: string): string {
  const mapOrder = new Map<string, number>();
  const mapS = new Map<number, string[]>();

  let output: string[] = [];
  for (let i = 0; i < order.length; ++i) {
    mapOrder.set(order[i], i);
  }
  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    if (mapOrder.has(char)) {
      const charIdx = mapOrder.get(char)!;
      if (charIdx) {
        const prevStoredIdx = mapS.get(charIdx) ?? [];
        mapS.set(charIdx, [...prevStoredIdx, char]);
      } else {
        mapS.set(charIdx, [char]);
      }
    } else {
      const prevStoredIdx = mapS.get(-1) ?? [];
      mapS.set(-1, [...prevStoredIdx, char]);
    }
  }
  for (let i = 0; i < order.length; ++i) {
    const charIdx = mapS.get(i);
    if (charIdx) {
      output = output.concat(charIdx);
    }
  }
  output.push(...(mapS.get(-1) ?? []));
  return output.join("");
}
console.log(customSortString("cba", "abcd")); // "cbad"
console.log(customSortString("bcafg", "abcd")); // "bcad"
console.log(customSortString("cba", "abcd")); // "cbad"
console.log(customSortString("kqep", "pekeq")); // "kqeep"
