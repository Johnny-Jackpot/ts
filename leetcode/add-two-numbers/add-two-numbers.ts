export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let next = new ListNode();
  let result = next;
  let carry = 0;

  while (l1 || l2) {
    let total = carry;

    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(total / 10);
    next.next = new ListNode(total % 10);
    next = next.next;
  }

  if (carry !== 0) {
    next.next = new ListNode(carry);
  }

  return result.next;
}
