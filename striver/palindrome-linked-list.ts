function isPalindrome(head: ListNode | null): boolean {
  const mid: ListNode | null = findMid(head);
  let rev: ListNode | null = reverseLL(mid);
  let temp: ListNode | null = head;
  while (rev && temp) {
    if (rev.val !== temp.val) return false;
    rev = rev.next;
    temp = temp.next;
  }
  return true;
}

function reverseLL(node: ListNode | null) {
  if (!node) return node;
  let curr: ListNode | null = node;
  let prev: ListNode | null = null;
  while (curr) {
    let next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return curr;
}

function findMid(head: ListNode | null) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    fast = fast.next?.next;
    slow = slow?.next ?? null;
  }
  return slow;
}
