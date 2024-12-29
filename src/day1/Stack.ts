type Node<T> = {
  value: T,
  prev?: Node<T>

}
export default class Stack<T> {
  public length: number;
  private head?: Node<T>


  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node: Node<T> = {
      value: item
    }
    console.log(this.head)
    if (!this.head) {
      this.length++
      this.head = node

    }
    this.length++
    node.prev = this.head
    this.head = node

  }
  pop(): T | undefined {

    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const node = this.head;
      this.head = undefined
      return node?.value
    }

    const head = this.head
    this.head = head?.prev
    this.length--;
    return head?.value
  }
  peek(): T | undefined {
    console.log(this.head)



    return this.head?.value
  }
}
