let myLinkedList = {
	head: {
		value: 10,
		next: {
			value: 5,
			next: {
				value: 16,
				next: null,
			},
		},
	},
};
type LL = {
	value: number;
	next: LL | null;
};

class LinkedList {
	private head: LL | null = null;
	private tail: LL | null = null;
	private length: number = 0;
	constructor(value: number) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}
	append(value: number) {
		if (this.head === null || this.tail === null) return;
		const newNode = {
			value: value,
			next: null,
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value: number) {
		if (this.head === null || this.tail === null) return;
		const newNode = {
			value,
			next: this.head,
		};
		this.head = newNode;
		this.length++;
		return this;
	}
	printList() {
		const array: number[] = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
	insert(index: number, value: number) {
		if (this.head === null || this.tail === null) return;
		if (index >= this.length) return this.append(value);
		if (index === 0) return this.prepend(value);
		let temp = this.head;
		for (let i = 0; i < this.length; i++) {
			if (index - 1 === i) {
				const newNode = {
					value,
					next: temp.next,
				};
				temp.next = newNode;
				this.length++;
			}
			temp = temp.next === null ? temp : temp.next;
		}
		return this;
	}
	remove(index: number) {
		if (this.head === null || this.tail === null) return;
		if (index < 0 || index >= this.length || this.length === 0) return this;
		if (index === 0) {
			this.head = this.head.next;
			this.length--;
			return this;
		}
		let temp = this.head;
		let currentIndex = 0;
		while (temp.next !== null || currentIndex !== this.length) {
			if (currentIndex === index - 1) {
				if (temp.next === null) {
					this.tail = temp;
				}
				temp.next = temp.next?.next;
				this.length--;
			}
			temp = temp.next === null ? temp : temp.next;
			currentIndex++;
		}
		return this;
	}
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.prepend(16);
linkedList.insert(2, 99);
console.log(linkedList.printList());
linkedList.remove(3);
console.log(linkedList.printList());

console.log(linkedList);
