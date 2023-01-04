// Definition for singly-linked list.
// @ts-expect-error fdf
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
	if (!headA || !headB) return null;
	let head1: null | ListNode = headA;
	let head2: null | ListNode = headB;
	while (head1 !== head2) {
		head1 = head1.next;
		head2 = head2.next;
		console.log(head1?.val, head2?.val);
		if (head1 === head2) return head1;
		if (!head1) head1 = headA;
		if (!head2) head2 = headB;
	}
	return head1;
}
// [4,1,8,4,5]
const firstLL = new ListNode(4, new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5)))));
// [5,6,1,8,4,5]
const secondLL = new ListNode(5, new ListNode(6, new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5))))));

console.log(getIntersectionNode(firstLL, secondLL));
