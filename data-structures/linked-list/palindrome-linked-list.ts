// Given the head of a singly linked list, return true if it is a
// palindrome
// or false otherwise.
// Example 1:
// Input: head = [1,2,2,1]
// Output: true
// Example 2:
// Input: head = [1,2]
// Output: false
// Constraints:
//     The number of nodes in the list is in the range [1, 105].
//     0 <= Node.val <= 9
// @ts-expect-error
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
function isPalindrome(head: ListNode | null): boolean {
	if (head == null) return false;
	// fill the stack
	let [node, stack] = [head as ListNode | null, [] as number[]];
	while (node) {
		stack.push(node.val);
		node = node.next;
	}
	// play backwards
	for (let i = 0; i < stack.length; i++) {
		if (stack[i] != stack[stack.length - 1 - i]) return false;
	}
	return true;
}

// example 1
let head = new ListNode(1);
head.next = new ListNode(2);
head.next = new ListNode(2);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);
console.log(isPalindrome(head));

// example 2
head = new ListNode(1);
head.next = new ListNode(2);
console.log(isPalindrome(head));
