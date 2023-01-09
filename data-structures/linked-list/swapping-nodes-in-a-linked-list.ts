// You are given the head of a linked list, and an integer k.
// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]
// Example 2:
// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]
// Constraints:
//     The number of nodes in the list is n.
//     1 <= k <= n <= 105
//     0 <= Node.val <= 100

// @ts-ignore
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
	if (!head) return null;
	let current: ListNode | null = head;
	let total = 0;
	while (current) {
		current = current.next;
		total++;
	}
	current = head;
	let index = 1;
	let kthValue = 0;
	let reverseKthValue = 0;
	while (current) {
		console.log(current.val, index, k, total);
		if (index === k) kthValue = current.val;
		if (index === total + 1 - k) reverseKthValue = current.val;
		current = current.next;
		index++;
	}
	current = head;
	index = 1;
	while (current) {
		if (index === k) current.val = reverseKthValue;
		if (index === total + 1 - k) current.val = kthValue;
		current = current.next;
		index++;
	}
	return head;
}

function findNodeAtNthIndex(head: ListNode | null, k: number): ListNode | null {
	if (!head) return null;
	let current: ListNode | null = head;
	let index = 1;
	while (current) {
		if (index === k) return current;
		current = current.next;
		index++;
	}
	return null;
}
function reverseLL(head: ListNode | null): { prev: ListNode | null; total: number } {
	let prev: ListNode | null = null;
	let cur: ListNode | null = head;
	let total = 0;
	while (cur) {
		const next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
		total++;
	}
	return { prev, total };
}

// example 1
const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log("swapNodes(head1, 2)", swapNodes(head1, 2));

// example 2
// const head2 = new ListNode(
// 	7,
// 	new ListNode(
// 		9,
// 		new ListNode(
// 			6,
// 			new ListNode(
// 				6,
// 				new ListNode(7, new ListNode(8, new ListNode(3, new ListNode(0, new ListNode(9, new ListNode(5))))))
// 			)
// 		)
// 	)
// );
// console.log("swapNodes(head2, 5)", swapNodes(head2, 5));
