import { describe, expect, test } from "@jest/globals";
import { ListNode, addTwoNumbers } from "./add-two-numbers";

function getListNodeFromArr(arr: number[]): ListNode {
  const root = new ListNode();
  let nextNode = root;
  arr.forEach((n, index) => {
    nextNode.val = n;
    if (index !== arr.length - 1) {
      nextNode.next = new ListNode();
      nextNode = nextNode.next;
    }
  });

  return root;
}

describe("getListNodeFromArr", () => {
  test("getListNodeFromArr returns correct list node", () => {
    expect(getListNodeFromArr([1, 0, 0, 0, 9, 8, 5])).toStrictEqual(
      new ListNode(
        1,
        new ListNode(
          0,
          new ListNode(
            0,
            new ListNode(0, new ListNode(9, new ListNode(8, new ListNode(5)))),
          ),
        ),
      ),
    );
  });
});

type TestDataItem = {
  title: string;
  l1: ListNode;
  l2: ListNode;
  expected: ListNode;
};
const data: TestDataItem[] = [
  {
    title: "Calculate huge number",
    l1: getListNodeFromArr([
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 1,
    ]),
    l2: getListNodeFromArr([5, 4, 6]),
    expected: getListNodeFromArr([
      6, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 1,
    ]),
  },
  {
    title: "Calculate with carry",
    l1: getListNodeFromArr([9, 9, 9, 9, 9, 9, 9]),
    l2: getListNodeFromArr([9, 9, 9, 9]),
    expected: getListNodeFromArr([8, 9, 9, 9, 0, 0, 0, 1]),
  },
];
describe("Add two numbers", () => {
  data.forEach((item) => {
    test(item.title, () => {
      expect(addTwoNumbers(item.l1, item.l2)).toStrictEqual(item.expected);
    });
  });
});
