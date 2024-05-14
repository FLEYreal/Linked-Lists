// ./src/linked-array.ts

// Modules
import { LinkedNode } from "./linked-node.js";
import { NoNodeError, EmptyArrayError } from "./errors.js";

export class LinkedArray<T = any | undefined> {
  /** Head of the linked array */
  public start: LinkedNode<T> | undefined;

  /** Current linked array length */
  public length: number;

  constructor(node?: T | T[]) {
    // Default length
    this.length = 0;

    // Insert node(s)
    if (node) this.push(node);
  }

  /** Get a node of the defined index */
  get(index: number): LinkedNode<T> {
    // Throw error if index's outside linked array's range
    if (index < 0) throw new RangeError("Index cannot be negative.");
    if (this.length <= index) throw new RangeError("Index cannot exceed linked array's length.");
    if (this.length === 0) throw new EmptyArrayError();

    // Iterable node and counter as index of the node
    let itr = this.start;
    let counter = 0;

    while (itr) {
      // Return found node
      if (index === counter) return itr;

      // Move to next node and increment counter
      itr = itr.nextNode;
      counter += 1;
    }

    throw new RangeError(
      "Unable to find a node you're looking for. Most probably it never existed or was deleted.",
    );
  }

  /**
   * Insert a single node in the end of the linked array
   */
  pushSingle(node: T): void {
    // No node provided to method
    if (node === undefined) throw new NoNodeError();

    // If linked array is empty, set heading node
    if (this.start === undefined) {
      this.start = new LinkedNode<T>(node, undefined);
      this.length += 1;
      return;
    }

    // Iterable node
    let itr = this.start;

    // Move to the next node until reaching the last
    while (itr.nextNode) {
      itr = itr.nextNode;
    }

    // Push new node in the end of the array.
    itr.nextNode = new LinkedNode<T>(node, undefined);
    this.length += 1;
  }

  /**
   * Insert single or multiple nodes in the end of the linked array
   */
  push(node: T | T[]): void {
    // Insert multiple nodes
    if (node instanceof Array) for (let i = 0; node.length > i; i++) this.pushSingle(node[i]);
    // Insert single node
    else this.pushSingle(node);
  }

  /**
   * Insert node in the start of the linked array
   */
  shiftSingle(node: T): void {
    // No node provided to method
    if (node === undefined) throw new NoNodeError();

    // Create new start of the linked array
    const newStart = new LinkedNode<T>(node, this.start);

    // Update starting position
    this.start = newStart;
    this.length += 1;
  }

  shift(node: T | T[]): void {
    // Insert multiple nodes
    if (node instanceof Array) for (let i = 0; node.length > i; i++) this.shiftSingle(node[i]);
    // Insert single node
    else this.shiftSingle(node);
  }

  /** Remove node in the end of the linked array by provided index */
  remove(index: number): void {
    // Throw error if index's outside linked array's range
    if (index < 0) throw new RangeError("Index cannot be negative.");
    if (this.length <= index) throw new RangeError("Index cannot exceed linked array's length.");
    if (this.length === 0 || !this.start) throw new EmptyArrayError();

    // Iterable node and counter as index of the node
    let itr = this.start;
    let counter = 0;

    // If index is 0
    if (counter === index) {
      this.start = itr.nextNode;
      this.length -= 1;
      return;
    }

    // Iterate over each node until needed node is found
    while (itr.nextNode) {
      // If current node's index and provided index are the same
      if (counter === index - 1) {
        // Remove node and update length
        itr.nextNode = itr.nextNode.nextNode;
        this.length -= 1;
        return;
      }

      // Move to the next node and update counter
      itr = itr.nextNode;
      counter += 1;
    }
  }

  /** Remove the last element of the linked array */
  pop(): void {
    this.remove(this.length - 1);
  }

  /** Remove the first element of the linked array */
  unshift(): void {
    this.remove(0);
  }
}
