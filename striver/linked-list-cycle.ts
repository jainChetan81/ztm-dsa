function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;
  while (slow !== fast) {
    if (slow === fast) return true;
    slow = slow?.next ?? null;
    fast = fast?.next ?? null;
  }
  return false;
}
