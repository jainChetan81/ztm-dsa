// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:
// Input: head = []
// Output: []
// Example 3:
// Input: head = [1]
// Output: [1]
// Constraints:
//     The number of nodes in the list is in the range [0, 100].
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
function swapPairs(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head;
}

// example 1:
// Input: head = [1,2,3,4]
const headSwap1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

// Output: [2,1,4,3]
console.log(swapPairs(headSwap1));

// example 2
// Input head=[]
const headSwap3 = new ListNode();
console.log(swapPairs(headSwap3));

// example 3
// Input: head = [1]
const headSwap2 = new ListNode(1);
console.log(swapPairs(headSwap2));
