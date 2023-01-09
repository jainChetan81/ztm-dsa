// You are given the head of a linked list.
// Remove every node which has a node with a strictly greater value anywhere to the right side of it.
// Return the head of the modified linked list.
// Example 1:
// Input: head = [5,2,13,3,8]
// Output: [13,8]
// Explanation: The nodes that should be removed are 5, 2 and 3.
// - Node 13 is to the right of node 5.
// - Node 13 is to the right of node 2.
// - Node 8 is to the right of node 3.
// Example 2:
// Input: head = [1,1,1,1]
// Output: [1,1,1,1]
// Explanation: Every node has value 1, so no nodes are removed.

// Constraints:
//     The number of the nodes in the given list is in the range [1, 105].
//     1 <= Node.val <= 105
// @ts-ignore
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
function removeNodes(head: ListNode | null) {
	// get a separate reversed list
	if (!head) return null;
	let reversedHead = reverseLL(head);
	let newReverseHead: ListNode | null = null;
	let reversedCurrent: ListNode | null = null;
	let max = 0;
	while (reversedHead) {
		if (reversedHead.val >= max) {
			max = reversedHead.val;
			if (!newReverseHead || !reversedCurrent) {
				// in case this is the first time just make sure the new shifting head and the current node is pointing towards tail
				newReverseHead = reversedHead;
				reversedCurrent = reversedHead;
			} else {
				// if there is a smaller number on the left than max on right
				// skip the current node and point the previous node to the next node
				reversedCurrent.next = reversedHead;
				reversedCurrent = reversedCurrent.next;
			}
		}
		reversedHead = reversedHead.next;
	}
	if (!reversedCurrent) return null;
	// we are at the head or tail of reversed linked list
	reversedCurrent.next = null;

	return reverseLL(newReverseHead);
}

export function reverseLL(head: ListNode | null): ListNode | null {
	let prev: ListNode | null = null;
	let cur: ListNode | null = head;

	while (cur) {
		const next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
	}

	return prev;
}
// function removeNodes(head: ListNode | null): ListNode | null {
// 	if (!head) return null;
// 	if (!head.next) return head;
// 	let current: ListNode | null = head;
// 	let prev: ListNode | null = null;

// 	while (current) {
// 		let next: ListNode | null = current.next;
// 		let shouldCurrentBeRemoved = false;
// 		while (next) {
// 			if (next.val > current.val) {
// 				shouldCurrentBeRemoved = true;
// 				break;
// 			}
// 			next = next.next;
// 		}
// 		if (shouldCurrentBeRemoved) {
// 			if (current === head && !prev) {
// 				// this is the head which we are removing right now
// 				// just point the head to the next version of itself
// 				console.log("REMOVING HEAD: ", head?.val, prev?.val);
// 				head = head!.next;
// 				prev = null;
// 				current = head;
// 				continue;
// 			} else {
// 				// update the prev to jump the current and point to next of current
// 				console.log("NOT HEAD: ", current.val, "prev: ", prev?.val, "head: ", head?.val);
// 				prev!.next = current.next;

// 				current = current.next;
// 				continue;
// 			}
// 		}
// 		// after everything just update the prev to current and update the current to next version of itself
// 		prev = current;
// 		current = current.next;
// 	}
// 	return head;
// }

// // example 1
const head = new ListNode(5, new ListNode(2, new ListNode(13, new ListNode(3, new ListNode(2, new ListNode(8))))));
// example 2
// const head2 = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1))));
console.log(removeNodes(head));
// console.log(removeNodes(head2));

// const head3 = new ListNode(138, new ListNode(466, new ListNode(216, new ListNode(67, new ListNode(642)))));
// console.log(removeNodes(head3));
