// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:
// Input: head = [], val = 1
// Output: []
// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []
// Constraints:
//     The number of nodes in the list is in the range [0, 104].
//     1 <= Node.val <= 50
//     0 <= val <= 50
// @ts-ignore
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
function removeElements(head: ListNode | null, val: number): ListNode | null {
	if (!head) return null;
	let tempHead: ListNode | null = head,
		prev: ListNode | null = null;
	while (tempHead) {
		if (tempHead.val === val) {
			// for 0th index
			if (!prev) {
				// @ts-ignore
				head = head.next;
				tempHead = tempHead.next;
				continue;
			}
			prev.next = tempHead.next;
			tempHead = tempHead.next;
			continue;
		}
		prev = tempHead;
		tempHead = tempHead.next;
	}

	return head;
}

// example 1
const r1 = removeElements(
	new ListNode(
		1,
		new ListNode(
			2,
			new ListNode(
				6,
				new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(8, new ListNode(9))))))
			)
		)
	),
	6
);
console.log(r1);
