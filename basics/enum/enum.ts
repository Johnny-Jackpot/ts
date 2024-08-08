export enum EDirection {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export const ODirection = {
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3,
} as const;

export function walk(direction: EDirection): EDirection {
  return direction;
}

export type Direction = (typeof ODirection)[keyof typeof ODirection];

export function run(direction: Direction): Direction {
  return direction;
}
