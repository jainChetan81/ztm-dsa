class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return head;
  let newHead: _Node | null = null;
  let temp: _Node | null = head;
  let newTemp: _Node | null = null;
  const map = new Map<_Node, _Node>();
  while (temp) {
    const newNode = new _Node(temp.val);
    if (!newTemp) {
      newHead = newNode;
      newTemp = newHead;
    } else {
      newTemp.next = newNode;
      newTemp = newTemp.next;
    }
    map.set(temp, newTemp);
    temp = temp.next;
  }
  newTemp = newHead;
  temp = head;
  while (newTemp && temp) {
    newTemp.random = temp.random ? map.get(temp.random) ?? null : null;
    newTemp = newTemp.next;
    temp = temp.next;
  }
  return newHead;
}
