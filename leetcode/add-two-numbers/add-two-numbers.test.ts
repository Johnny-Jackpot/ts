import {describe, expect, test} from '@jest/globals';
import {ListNode, addTwoNumbers} from "./add-two-numbers";

describe('Add two numbers', () => {
  const l1Arr = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
  const l2Arr = [5, 4, 6];
  const expectedArr = [6, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

  function getListNodeFromArr(arr: number[]): ListNode {
    const root = new ListNode();
    let nextNode = root;
    arr.forEach((n) => {
      nextNode.val = n;
      nextNode.next = new ListNode();
      nextNode = nextNode.next;
    });

    return root;
  }

  const l1 = getListNodeFromArr(l1Arr);
  const l2 = getListNodeFromArr(l2Arr);
  const expected = getListNodeFromArr(expectedArr);

  test('Calculate huge number', () => {
    expect(addTwoNumbers(l1, l2)).toStrictEqual(expected);
  });
});
