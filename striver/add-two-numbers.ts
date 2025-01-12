function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;
  let dummy = new ListNode(0);
  let carry = 0;

  while (l1 && l2) {
    let sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    dummy.next = new ListNode(sum);
  }
  if (carry) dummy.next = new ListNode(carry);
  return dummy.next;
}
