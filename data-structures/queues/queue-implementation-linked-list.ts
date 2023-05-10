// @ts-ignore
class ListNode {
	val: string;
	next: ListNode | null;
	constructor(val?: string, next?: ListNode | null) {
		this.val = val === undefined ? "" : val;
		this.next = next === undefined ? null : next;
	}
}
class QueueLL {
	first: ListNode | null;
	last: ListNode | null;
	length: number;
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek() {
		return this.first;
	}
	enqueue(value: string) {
		const newNode = new ListNode(value);
		if (!this.last || this.length === 0) {
			this.first = newNode;
			this.last = newNode;
			this.length++;
			return this;
		}
		this.last.next = newNode;
		this.last = newNode;
		this.length++;
		return this;
	}
	dequeue() {
		if (!this.first) return null;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.length--;
		return this;
	}
}

const queueLL = new QueueLL();
queueLL.enqueue("Joy");
queueLL.enqueue("Matt");
console.log(queueLL.peek());
queueLL.enqueue("Pavel");
console.log(queueLL.peek());
queueLL.enqueue("Samir");
console.log(queueLL.peek());
queueLL.dequeue();
console.log(queueLL.peek());
queueLL.dequeue();
queueLL.dequeue();
console.log(queueLL.peek());
queueLL.dequeue();
