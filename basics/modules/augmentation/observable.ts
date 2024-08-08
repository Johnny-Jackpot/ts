export class Observable<T> {
  private subscribers: Array<(value: T) => void> = []

  subscribe(subscriber: (value: T) => void): void {
    this.subscribers.push(subscriber)
  }

  next(value: T): void {
    this.subscribers.forEach(subscriber => subscriber(value))
  }

  unsubscribe(subscriber: (value: T) => void): void {
    this.subscribers = this.subscribers.filter(s => s !== subscriber)
  }
}
