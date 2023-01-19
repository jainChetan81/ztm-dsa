// @ts-expect-error duplication
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

class Stack {
	top: ListNode | null;
	bottom: ListNode | null;
	length: number;
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	peek() {
		return this.top;
	}
	push(value: number) {
		const newNode = new ListNode(value);
		if (this.length === 0) {
			this.bottom = newNode;
			this.top = newNode;
			this.length++;
			return this;
		}
		const top = this.top;
		this.top = newNode;
		this.top.next = top;
		this.length++;
		return this;
	}
	pop() {
		if (!this.top) return null;
		this.top = this.top.next;
		this.length--;
		return this;
	}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek());
stack.push(3);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
