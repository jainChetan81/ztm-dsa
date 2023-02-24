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

// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	if (!l1 && !l2) return null;
	if (!l1) return l2;
	if (!l2) return l1;
	const num1 = [],
		num2 = [];
	let tempL1: ListNode | null = l1;
	let tempL2: ListNode | null = l2;
	while (tempL1 !== null || tempL2 !== null) {
		if (tempL1) {
			num1.push(tempL1.val);
			tempL1 = tempL1.next;
		}
		if (tempL2) {
			num2.push(tempL2.val);
			tempL2 = tempL2.next;
		}
	}
	const newNodeStr = `${BigInt(+num1.reverse().join("") + +num2.reverse().join(""))}`;
	console.log(num1.join(""), num2.join(""), newNodeStr);
	let newNode1: ListNode | null = null;
	let tempNewNode: ListNode | null = null;

	for (let i = 0; i < newNodeStr.length; i++) {
		const node = new ListNode(+newNodeStr[i]);
		// console.log(node);
		if (!newNode1) {
			newNode1 = node;
			tempNewNode = node;
		} else {
			tempNewNode!.next = node;
			tempNewNode = tempNewNode!.next;
		}
	}
	// while (newNode1 !== null) {
	// 	console.log(newNode1.val);
	// 	newNode1 = newNode1.next;
	// }
	return newNode1;
}

// const lEx1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const lEx2 = new ListNode(5, new ListNode(6, new ListNode(4)));
// console.log(addTwoNumbers(lEx1, lEx2));

// const lEx21 = new ListNode(0);
// const lEx22 = new ListNode(0);
// console.log(addTwoNumbers(lEx21, lEx22));

// const lEx31 = new ListNode(
// 	9,
// 	new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))
// );
// const lEx32 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
// console.log(addTwoNumbers(lEx31, lEx32));
const lEx41 = new ListNode(
	1,
	new ListNode(
		0,
		new ListNode(
			0,
			new ListNode(
				0,
				new ListNode(
					0,
					new ListNode(
						0,
						new ListNode(
							0,
							new ListNode(
								0,
								new ListNode(
									0,
									new ListNode(
										0,
										new ListNode(
											0,
											new ListNode(
												0,
												new ListNode(
													0,
													new ListNode(
														0,
														new ListNode(
															0,
															new ListNode(
																0,
																new ListNode(
																	0,
																	new ListNode(
																		0,
																		new ListNode(
																			0,
																			new ListNode(
																				0,
																				new ListNode(
																					0,
																					new ListNode(
																						0,
																						new ListNode(
																							0,
																							new ListNode(
																								0,
																								new ListNode(
																									0,
																									new ListNode(
																										0,
																										new ListNode(
																											0,
																											new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))
																										)
																									)
																								)
																							)
																						)
																					)
																				)
																			)
																		)
																	)
																)
															)
														)
													)
												)
											)
										)
									)
								)
							)
						)
					)
				)
			)
		)
	)
);
const lEx42 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(lEx41, lEx42));
