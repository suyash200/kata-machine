function walk(head: BinaryNode<number> | null, path: number[]): number[] {

  //baseCase
  if (!head) {
    return path
  }
  //pre (meaning add value to the stack)
  path.push(head.value)
  //recurse first left then rights
  walk(head.left, path);
  walk(head.right, path);

  return path;
}


export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, [])

}
