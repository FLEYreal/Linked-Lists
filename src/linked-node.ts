/** Class for the linked array node with value of current node and link to the next node */
export class LinkedNode<T = any> {
  public node: T | undefined;
  public nextNode: LinkedNode<T> | undefined;

  constructor(
    node?: T,
    nextNode?: LinkedNode<T>,
  ) {
    // Current node
    this.node = node || undefined;

    // The next node
    this.nextNode = nextNode || undefined;
  }
}