function deleteNode(node: ListNode | null): void {
  if (!node) return;
  let next = node.next;
  if (!next) return;
  node.val = next?.val;
  node.next = next.next;
}
