import {describe, expect, test} from '@jest/globals';
import {islandPerimeter} from './island-perimeter';

type TestData = {
  grid: number[][];
  perimeter: number;
  title: string;
}

const testData: TestData[] = [
  {
    title: 'Big island',
    grid: [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
    ],
    perimeter: 16
  },
  {
    title: 'Small square island',
    grid: [[1]],
    perimeter: 4
  },
  {
    title: 'Small rectangle island',
    grid: [[1, 0]],
    perimeter: 4,
  }
];

describe('Island perimeter', () => {
  testData.forEach(data => {
    test(data.title, () => {
      expect(islandPerimeter(data.grid)).toBe(data.perimeter);
    });
  });
});
