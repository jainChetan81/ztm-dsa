// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

// The most significant bit is at the head of the linked list.
// Constraints:

//     The Linked List is not empty.
//     Number of nodes will not exceed 30.
//     Each node's value is either 0 or 1.

// @ts-ignore
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
function getDecimalValue(head: ListNode | null): number {
	if (head === null) return 0;
	let binary = "";
	let currentNode: ListNode | null = head;
	while (currentNode !== null) {
		console.log(currentNode.val);
		binary += currentNode.val;
		currentNode = currentNode.next;
	}
	console.log(binary);
	return parseInt(binary, 2);
}

// Example 1:
// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10

console.log(getDecimalValue(new ListNode(1, new ListNode(0, new ListNode(1)))));
