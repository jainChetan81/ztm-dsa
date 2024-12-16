const txt = await Bun.file("./first/first.txt").text();
const arr = txt.split("\n");

const first: number[] = [];
const second: number[] = [];
arr.forEach((item) => {
	const [firstNum, secondNum] = item.split(" ").filter(Boolean);
	first.push(+firstNum);
	second.push(+secondNum);
});
first.sort((a, b) => a - b);
second.sort((a, b) => a - b);

// answer of first puzzle
let total = 0;
for (let i = 0; i < first.length; i++) {
	total += Math.abs(first[i] - second[i]);
}
console.log(total);

// answer of second puzzle
let result = 0;
const secondMap = new Map<number, number>();
for (let i = 0; i < first.length; i++) {
	secondMap.set(second[i], (secondMap.get(second[i]) || 0) + 1);
}
for (let i = 0; i < first.length; i++) {
	result += Math.abs(first[i] * (secondMap.get(first[i]) ?? 0));
}
console.log(result);
