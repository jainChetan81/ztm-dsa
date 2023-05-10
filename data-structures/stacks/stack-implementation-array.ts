class StackArray {
	private array: number[];
	constructor() {
		this.array = [];
	}
	peek() {
		return this.array.at(-1);
	}
	push(value: number) {
		this.array.push(value);
		return this;
	}
	pop() {
		if (this.array.length === 0) {
			return null;
		}
		return this.array.pop();
	}
}

const stackArray = new StackArray();
stackArray.push(1);
stackArray.push(2);
console.log(stackArray.peek());
stackArray.push(3);
console.log(stackArray.peek());
stackArray.pop();
console.log(stackArray.peek());
stackArray.pop();
console.log(stackArray.peek());
