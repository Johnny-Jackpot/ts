export class Observable<T> {
  private subscribers: Array<(value: T) => void> = [];

  constructor(
    private readonly generator: (observer: (value: T) => void) => void,
  ) {
    this.generator((value: T) => {
      for (const subscriber of this.subscribers) {
        subscriber(value);
      }
    });
  }

  subscribe(subscriber: (value: T) => void): void {
    this.subscribers.push(subscriber);
  }

  next(value: T): void {
    this.subscribers.forEach((subscriber) => subscriber(value));
  }

  unsubscribe(subscriber: (value: T) => void): void {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }
}

declare global {
  interface Array<T> {
    toObservable(): Observable<T>;
  }
}

Array.prototype.toObservable = function <T>(): Observable<T> {
  const array = this as T[];
  return new Observable<T>((observer) => {
    for (const item of array) {
      console.log(item);
      observer(item);
    }
  });
};
