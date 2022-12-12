type DLL = {
	value: number;
	next: DLL | null;
	prev: DLL | null;
};

class DoublyLinkedList {
	private head: DLL | null = null;
	private tail: DLL | null = null;
	private length: number = 0;
	constructor(value: number) {
		this.head = {
			value: value,
			next: null,
			prev: null,
		} as DLL;
		this.tail = this.head;
		this.length = 1;
	}
	append(value: number) {
		if (this.head === null || this.tail === null) return;
		const newNode: DLL = {
			value: value,
			next: null,
			prev: null,
		};
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value: number) {
		if (this.head === null || this.tail === null) return;
		const newNode: DLL = {
			value,
			next: this.head,
			prev: null,
		};
		this.head.prev = newNode;
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
				const newNode: DLL = {
					value,
					next: null,
					prev: null,
				};
				newNode.next = temp.next;
				newNode.prev = temp;
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
			this.head!.prev = null;
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
				temp.next = temp.next?.next ? temp.next.next : temp.next;
				this.length--;
			}
			temp = temp.next === null ? temp : temp.next;
			currentIndex++;
		}
		return this;
	}
}

const doublyLinkedList = new DoublyLinkedList(10);
doublyLinkedList.append(5);
doublyLinkedList.append(15);
doublyLinkedList.prepend(16);
doublyLinkedList.insert(2, 99);
console.log(doublyLinkedList.printList());
// doublyLinkedList.remove(3);
// console.log(doublyLinkedList.printList());
