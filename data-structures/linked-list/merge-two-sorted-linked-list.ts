// Definition for singly-linked list.
// @ts-expect-error dasds
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	let head = new ListNode();
	let current = head;
	while (list1 !== null && list2 !== null) {
		if (list1.val < list2.val) {
			current.next = list1;
			list1 = list1.next;
		} else {
			current.next = list2;
			list2 = list2.next;
		}
		current = current.next;
	}
	if (list1 !== null) {
		current.next = list1;
		list1 = list1.next;
	}
	if (list2 !== null) {
		current.next = list2;
		list2 = list2.next;
	}
	return head.next;
}
