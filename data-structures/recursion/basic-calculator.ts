function calculate(s: string): number {
	const newStr = s.replace(/ /g, "").split("");
	console.log(newStr);
	const stack: number[] = [];
	let temp = "";
	for (let i = 0; i < newStr.length; i++) {
		if (newStr[i] === "(") {
			stack.push(i);
		}
		if (newStr[i] === ")") {
			const [currentIndex, prevIndex] = [i, stack.pop()! + 1];
			const subString = newStr.slice(prevIndex, currentIndex);
			console.log(subString);
		}
		temp += newStr[i];
	}
	return +calculateString(temp.split(""));
}
function calculateString(arr: string[]): string {
	if (arr.length === 1) return arr[0];
	// console.log(arr);
	const [a, constraint, b, ...rest] = arr;
	const result = calculateValue(+a, constraint, +b);
	// console.log(result);
	return calculateString([`${result}`, ...rest]);
}
function calculateValue(a: number, m: string, b: number) {
	console.log(a, m, b);
	if (isNaN(a) || isNaN(b)) return 0;
	if (m === "+") return a + b;
	if (m === "-") return a - b;
	return 0;
}

console.log(calculate("1 + 1")); //2
console.log(calculate(" 2-1 + 2 ")); //3
console.log(calculate("4+5+2")); //3
// console.log(calculateString("1 + 1".replace(/ /g, "").split(""))); //2
// console.log(calculateString(" 2-1 + 2 ".replace(/ /g, "").split(""))); //3
// console.log(calculateString("4+5+2".replace(/ /g, "").split(""))); //3
// console.log(calculate("(1+(4+5+2)-3)+(6+8)")); //23
