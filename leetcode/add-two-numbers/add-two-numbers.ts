class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return getNodeListFromNumber(getNumberFromList(l1) + getNumberFromList(l2));
};

export function getNumberFromList(l: ListNode | null): number {
  let number = 0;
  if (!l) {
    return number;
  }

  let multiplicator = 1;

  do {
    number += l.val * multiplicator;
    multiplicator = multiplicator * 10;
    l = l.next;
  } while (l);

  return number;
}

export function getNodeListFromNumber(n: number): ListNode | null {
  if (n === 0) {
    return new ListNode();
  }

  const remainder = n % 10;
  const nextN = (n - remainder) / 10;

  return new ListNode(
    remainder,
    nextN > 0 ? getNodeListFromNumber(nextN) : null
  );
}
