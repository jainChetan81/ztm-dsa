function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;
  let temp1: ListNode | null = list1;
  let temp2: ListNode | null = list2;
  let newTemp: ListNode | null = null;
  let newHead: ListNode | null = null;

  while (temp1 && temp2) {
    let next: ListNode | null = null;
    if (temp1.val >= temp2.val) {
      next = temp1;
      temp1 = temp1.next;
    } else {
      next = temp2;
      temp2 = temp2.next;
    }
    if (newTemp) newTemp.next = next;
    if (!newTemp) newHead = next;
    newTemp = next;
  }
  while (temp1) {
    let next: ListNode | null = temp1;
    if (newTemp) newTemp.next = next;
    newTemp = next;
    temp1 = temp1.next;
  }
  while (temp2) {
    let next: ListNode | null = temp2;
    if (newTemp) newTemp.next = next;
    temp2 = temp2.next;
    newTemp = next;
  }
  return newHead;
}
