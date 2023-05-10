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
		this.length++;
		if (this.length === 0) {
			this.top = this.bottom = newNode;
			return newNode;
		}
		newNode.next = this.top;
		this.top = newNode;
		return newNode;
	}
	pop() {
		if (!this.top) return null;
		this.length--;
		if (this.top === this.bottom) {
			this.top = this.bottom = null;
			return null;
		}
		const current = this.top;
		this.top = current.next;
		return this.top;
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
