// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let length = 0;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast?.next && slow) {
    slow = slow?.next;
    fast = fast?.next?.next;
    length++;
  }
  return slow;
}
