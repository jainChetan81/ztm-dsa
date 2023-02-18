function recurse(str: string): string {
	if (str.length < 2) return str;
	const firstChar = str[0];
	const removedStr = str.slice(1);
	console.log(removedStr + firstChar);
	return recurse(removedStr) + firstChar;
}
console.log(recurse("awesome")); // 'emosewa'
