// You are given two linked lists: list1 and list2 of sizes n and m respectively.
// Remove list1's nodes from the ath node to the bth node, and put list2 in their place.
// The blue edges and nodes in the following figure indicate the result:
// Build the result list and return its head.
// Example 1:
// Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
// Output: [0,1,2,1000000,1000001,1000002,5]
// Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
// Example 2:
// Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
// Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
// Explanation: The blue edges and nodes in the above figure indicate the result.
//     3 <= list1.length <= 104
//     1 <= a <= b < list1.length - 1
//     1 <= list2.length <= 104
// @ts-ignore
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
	if (!list1) return list2;
	if (!list2) return list1;
	if (!list1 || !list2) return null;
	let temp: ListNode | null = list1;
	let index = 0;
	while (temp.next) {
		console.log(temp.val);
		if (index + 1 === a) {
			// to restart list1 after list2 is over
			let temp2 = temp.next;

			while (list2) {
				temp.next = list2;
				temp = temp.next;
				list2 = list2.next;
			}
			// what we need to do is to skip the nodes between a and b
			// that would mean storing the node after a and while loop until we find b
			// and then assign that value to after b and then let the normal loop run
			while (index + 1 !== b) {
				temp2 = temp2.next!;
				index++;
			}
			temp.next = temp2.next!;
			continue;
		}
		temp = temp.next;
		index++;
	}
	return list1;
}

// example 1
const list1 = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))));
const list2 = new ListNode(1000000, new ListNode(1000001, new ListNode(1000002)));
console.log(mergeInBetween(list1, 3, 4, list2));

// example 2
const list3 = new ListNode(
	0,
	new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))
);
const list4 = new ListNode(
	1000000,
	new ListNode(1000001, new ListNode(1000002, new ListNode(1000003, new ListNode(1000004))))
);
console.log(mergeInBetween(list3, 2, 5, list4));
