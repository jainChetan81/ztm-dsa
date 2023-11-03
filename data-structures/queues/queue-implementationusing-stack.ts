class MyQueueue {
	constructor() {}

	push(x: number): void {}

	pop(): number {}

	peek(): number {}

	empty(): boolean {}
}
const obj = new MyQueueue();
obj.push(5);
const param_2 = obj.pop();
console.log(param_2);
const param_3 = obj.peek();
console.log(param_3);
const param_4 = obj.empty();
console.log(param_4);
