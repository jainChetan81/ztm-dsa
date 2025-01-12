function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // Handle empty list
  if (!head) return null;

  // Create a dummy node to handle head removal case
  let dummy = new ListNode(0);
  dummy.next = head;

  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  // Move fast pointer n steps ahead
  for (let i = 0; i <= n; i++) {
    if (!fast) return head;
    fast = fast.next;
  }

  // Move both pointers until fast reaches end
  while (fast) {
    slow = slow.next!;
    fast = fast.next;
  }

  // Remove the nth node
  slow.next = slow.next?.next ?? null;

  return dummy.next;
}
