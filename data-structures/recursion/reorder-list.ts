// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Example 2:
// Input: head = [1,2,3,4,5]
// 1 5 2 3 4
//  1 5 2 4 3
// Output: [1,5,2,4,3]
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
	let tempHead = head;
	const stack = [];
	let n = 0;
	while (tempHead) {
		n++;
		stack.push(tempHead);
		tempHead = tempHead.next;
	}
	tempHead = head;
	for (let i = 0; i <= n / 2 - 1; i++) {
		const lastIndex = n - 1 - i;
		const nextNode = tempHead!.next;
		// console.log(nextNode.val);
		tempHead!.next = stack[lastIndex];
		stack[lastIndex].next = nextNode;
		tempHead = nextNode;
		// console.log(i, lastIndex, tempHead.val);
		// console.log(head);
	}
	if (tempHead) tempHead.next = null;
}
const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log("before=>", head1);
console.log(reorderList(head1));
console.log(head1);
