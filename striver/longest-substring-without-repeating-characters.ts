function lengthOfLongestSubstring(s: string): number {
  const set = new Set();
  let count = 0,
    tempCount = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    while (set.has(char)) {
      set.delete(s[start]);
      start++;
      tempCount--;
    }
    set.add(char);
    tempCount++;
    count = Math.max(tempCount, count);
  }
  return count;
}
console.log(lengthOfLongestSubstring("abdcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
