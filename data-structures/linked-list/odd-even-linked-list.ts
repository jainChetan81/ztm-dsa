// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
// Example 2:
// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]
// @ts-ignore
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function oddEvenList(head: ListNode | null): ListNode | null {
	if (!head || !head.next || !head.next.next) return head;
	// let odd: ListNode | null = head.next.next,
	// 	even: ListNode | null = head.next;
	const odd: ListNode[] = [],
		even: ListNode[] = [];
	let current: ListNode | null = head;
	let index = 0;
	while (current) {
		if (index % 2 !== 0) {
			even.push(current);
		} else {
			odd.push(current);
		}
		current = current.next;
		index++;
	}
	current = head;
	for (let i = 0; i < odd.length; i++) {
		// console.log("odd[i]", odd[i].val, current.val);
		current = odd[i];
		current.next = odd[i + 1];
	}
	for (let i = 0; i < even.length; i++) {
		// current = even[i];
		current.next = even[i];
		current = current?.next;
	}
	current.next = null;
	return head;
}

// Example 1:
// Input: head = [1,2,3,4,5]
const headOdd3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// Output: [1,3,5,2,4]
console.log(oddEvenList(headOdd3));
// example 2:
// Input: head = [2, 1, 3, 5, 6, 4, 7];
const headOdd = new ListNode(
	2,
	new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7))))))
);
console.log(oddEvenList(headOdd));
