// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	const dummyHead = new ListNode();
	let current = dummyHead;
	let carry = 0;

	while (l1 || l2) {
		const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
		carry = Math.floor(sum / 10);
		current.next = new ListNode(sum % 10);
		current = current.next;
		l1 = l1?.next || null;
		l2 = l2?.next || null;
	}

	if (carry > 0) {
		current.next = new ListNode(carry);
	}

	return dummyHead.next;
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(convertToArray(addTwoNumbers(l1, l2))); //[7,0,8]

const l3 = new ListNode(9);
l3.next = new ListNode(9);
l3.next.next = new ListNode(9);
l3.next.next.next = new ListNode(9);
l3.next.next.next.next = new ListNode(9);
l3.next.next.next.next.next = new ListNode(9);
l3.next.next.next.next.next.next = new ListNode(9);
const l6 = new ListNode(9);
l6.next = new ListNode(9);
l6.next.next = new ListNode(9);
l6.next.next.next = new ListNode(9);
console.log(convertToArray(addTwoNumbers(l3, l6))); //[8,9,9,9,0,0,0,1]

function convertToArray(l: ListNode | null) {
	const arr = [];
	while (l) {
		arr.push(l.val);
		l = l.next;
	}
	return arr;
}
l3.next.next.next.next.next = new ListNode(9);
l3.next.next.next.next.next.next = new ListNode(9);
const l4 = new ListNode(9);
l6.next = new ListNode(9);
l6.next.next = new ListNode(9);
l6.next.next.next = new ListNode(9);
console.log(addTwoNumbers(l3, l6)); //[8,9,9,9,0,0,0,1]
console.log(convertToArray(addTwoNumbers(l3, l6))); //[8,9,9,9,0,0,0,1]
