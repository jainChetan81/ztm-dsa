function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let head1: ListNode | null = headA;
  let head2: ListNode | null = headB;
  while (head1 !== head2) {
    head1 = head1?.next ?? null;
    head2 = head2?.next ?? null;
    if (head1 === head2) return head1;
    if (!head1) head1 = headB;
    if (!head2) head2 = headA;
  }
  return null;
}
