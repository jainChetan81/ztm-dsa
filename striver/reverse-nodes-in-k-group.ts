function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 1) return head; // Handle edge case where k is 1

  let dummy = new ListNode(0);
  dummy.next = head;
  let start: ListNode | null = dummy;
  let end: ListNode | null = head;
  let cnt = 0;

  while (end) {
    cnt++;
    if (cnt % k === 0) {
      // Only reverse when we have a complete group
      start = reverse(start, end.next);
      end = start.next;
    } else {
      end = end.next;
    }
  }
  return dummy.next;
}

function reverse(start: ListNode, end: ListNode | null): ListNode {
  let prev: ListNode | null = start;
  let curr: ListNode | null = start.next;
  const first: ListNode | null = curr;

  while (curr !== end) {
    const next: ListNode | null = curr!.next;
    curr!.next = prev;
    prev = curr;
    curr = next;
  }

  start.next = prev;
  first!.next = curr;
  return first!;
}
