// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:
// Input: head = [1,2]
// Output: [2,1]
// Example 3:
// Input: head = []
// Output: []
// Constraints:
//     The number of nodes in the list is the range [0, 5000].
//     -5000 <= Node.val <= 5000
// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
// @ts-ignore
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
function reverseList(head: ListNode | null): ListNode | null {
	if (head === null) return null;
	let first: ListNode | null = head;
	let prev: ListNode | null = null;
	while (first !== null) {
		const temp = first.next;
		first.next = prev;
		prev = first;
		first = temp;
	}
	return prev;
}
function printList(head: ListNode) {
	const array: number[] = [];
	let currentNode: ListNode | null = head;
	while (currentNode !== null) {
		array.push(currentNode.val);
		currentNode = currentNode.next;
	}
	return array;
}

console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))));
console.log(reverseList(new ListNode(1, new ListNode(2))));
console.log(reverseList(null));
