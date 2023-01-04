// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
// Constraints:
//     The number of nodes in the list is in the range [0, 300].
//     -100 <= Node.val <= 100
//     The list is guaranteed to be sorted in ascending order.
// Definition for singly-linked list.
// @ts-expect-error ffd
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
function deleteDuplicates(head: ListNode | null): ListNode | null {
	if (head === null) return null;
	let curr: ListNode | null = head;
	while (curr) {
		if (curr.next && curr.val === curr.next.val) {
			curr.next = curr.next!.next;
		} else curr = curr.next;
	}
	return head;
}
// example 1
const head1 = new ListNode(1, new ListNode(1, new ListNode(2)));
console.log(deleteDuplicates(head1));
// example 2
const head2 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
console.log(deleteDuplicates(head2));
