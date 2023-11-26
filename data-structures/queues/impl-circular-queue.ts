class ListNodeLL2 {
	val: number;
	next: ListNodeLL2 | null;
	constructor(val?: number, next?: ListNodeLL2 | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
class MyCircularQueue {
	first: ListNodeLL2 | null;
	last: ListNodeLL2 | null;
	length: number;
	max: number = 0;
	constructor(k: number) {
		this.first = null;
		this.last = null;
		this.length = 0;
		this.max = k;
	}

	enQueue(value: number): boolean {
		if (this.isFull()) return false;
		const newNode = new ListNodeLL2(value);
		this.length++;
		if (this.isEmpty() || this.last === null || this.first === null) {
			this.first = newNode;
			this.last = newNode;
			this.first.next = this.last;
			this.last.next = this.first;
			return true;
		} else {
			newNode.next = this.first;
			this.last.next = newNode;
			this.last = newNode;
			return true;
		}
	}

	deQueue(): boolean {
		if (this.isEmpty()) return false;
		this.length--;
		if (this.length === 0) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first!.next;
			this.last!.next = this.first;
		}
		return true;
	}

	Front(): number {
		if (this.isEmpty()) return -1;
		return this.first!.val;
	}

	Rear(): number {
		if (this.isEmpty()) return -1;
		return this.last!.val;
	}

	isEmpty(): boolean {
		return this.length === 0;
	}

	isFull(): boolean {
		return this.length === this.max;
	}
}

const queueCircularLL = new MyCircularQueue(5);
queueCircularLL.enQueue(1);
queueCircularLL.enQueue(12);
console.log(queueCircularLL.Rear());
queueCircularLL.enQueue(21);
console.log(queueCircularLL.Rear());
queueCircularLL.enQueue(13);
console.log(queueCircularLL.Rear());
queueCircularLL.deQueue();
console.log(queueCircularLL.Rear());
queueCircularLL.deQueue();
queueCircularLL.deQueue();
console.log(queueCircularLL.Front());
queueCircularLL.deQueue();
