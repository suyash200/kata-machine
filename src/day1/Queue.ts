type Node<T> = {
  value: any,
  next?: Node<T>
}
export default class Queue<T> {
  public length: number;
  private head?: Node<T>
  private tail?: Node<T>


  constructor() {
    this.head = this.tail = undefined
    this.length = 0;
  }

  enqueue(item: T): void {
    length++
    if (!this.tail) {
      this.head = this.tail = {
        value: item,
        next: undefined
      }
    }
    const node = {
      value: item

    } as Node<T>

    this.tail.next = node
    this.tail = node

  }
  deque(): T | undefined {
    if (this.head == undefined) {
      return undefined
    }
    this.length--;
    const head = this.head;
    this.head = this.head.next

    return head.value
  }
  peek(): T | undefined {
    return this.head?.value
  }
}
