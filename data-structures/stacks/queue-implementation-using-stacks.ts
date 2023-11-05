class MyQueue {
	stack: number[];
	constructor() {
		this.stack = [];
	}

	push(x: number): void {
		this.stack.unshift(x);
	}

	pop(): number {
		return this.stack.pop()!;
	}

	peek(): number {
		return this.stack[this.stack.length - 1];
	}

	empty(): boolean {
		return this.stack.length === 0;
	}
}

const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // 1
console.log(queue.pop()); // 1
console.log(queue.peek()); // 2
console.log(queue.pop()); // 1
queue.push(3);
console.log(queue.peek()); // 2
console.log(queue.empty()); // false
