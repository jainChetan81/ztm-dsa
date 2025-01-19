function partition(s: string): string[][] {
	const res: string[][] = [];
	const temp: string[] = [];
	function pallindromeStr(str: string) {
		let left = 0,
			right = str.length - 1;
		while (left <= right) {
			if (str[left] !== str[right]) return false;
			left++;
			right--;
		}
		return true;
	}
	function backtrack(idx: number, str: string) {
		if (idx >= s.length) {
			res.push([...temp]);
			return;
		}
		if (str.length > s.length) return;
		for (let i = idx; i < s.length; i++) {
			if (idx >= s.length) {
				res.push([...temp]);
				return;
			}
			str += s[i];
			if (pallindromeStr(str)) {
				temp.push(str);
				backtrack(i + 1, "");
				temp.pop();
			}
		}
	}
	backtrack(0, "");
	return res;
}

console.log(partition("aabb"));
// [ ['a','a','b','b'], ['aa','bb'], ['a','a','bb'], ['aa','b','b'] ]
