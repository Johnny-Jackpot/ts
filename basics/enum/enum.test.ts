import {describe, expect, test} from '@jest/globals';
import {EDirection, ODirection, run, walk} from "./enum";

describe("Enum", () => {
  test("Enum", () => {
    expect(walk(EDirection.LEFT)).toBe(EDirection.LEFT);
  });
  test("Object", () => {
    expect(run(ODirection.RIGHT)).toBe(ODirection.RIGHT);
  });
});
