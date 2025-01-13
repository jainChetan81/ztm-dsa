function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return head;
  let lenght = 0;
  let temp: ListNode | null = head;
  let tail: ListNode | null = head;

  while (temp) {
    if (!temp.next) tail = temp;
    temp = temp.next;

    lenght++;
  }
  const n = lenght - (k % lenght);
  if (n === 0) return head;
  temp = head;
  lenght = 0;
  while (temp && lenght !== n) {
    temp = temp.next;
    lenght++;
  }
  tail.next = head;
  head = temp!.next;
  temp!.next = null;
  return head;
}
