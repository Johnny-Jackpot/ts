import { Observable } from "./observable";
declare module "./observable" {
  interface Observable<T> {
    map<U>(f: (x: T) => U): Observable<U>;
  }
}

Observable.prototype.map = function <T, U>(
  this: Observable<T>,
  f: (x: T) => U,
): Observable<U> {
  const newObservable = new Observable<U>((v) => {});

  this.subscribe((value: T) => {
    const newValue = f(value);
    newObservable.next(newValue);
  });

  return newObservable;
};
