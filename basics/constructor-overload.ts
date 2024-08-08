class Point {
  protected x: number;
  protected y: number;
  constructor(x: number, y: number);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    if (typeof xs === "string") {
      this.x = +xs;
      this.y = +xs;
    }

    if (y) {
      this.y = +y;
    }
  }
}
