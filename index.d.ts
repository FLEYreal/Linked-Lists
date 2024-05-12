/**
 * Error thrown when attempting to perform an operation on an empty linked array.
 */
export declare class NoNodeError extends Error {
  /**
   * Creates an instance of NoNodeError.
   * @param {string} [message] - Optional error message.
   */
  constructor(message?: string);
}

/**
 * Represents a node in a linked array.
 * @template T - The type of data stored in the node.
 */
export declare class LinkedNode<T = any> {
  /**
   * Creates an instance of LinkedNode.
   * @param {T | undefined} [node] - The data to be stored in the node.
   * @param {LinkedNode<T> | undefined} [nextNode] - The reference to the next node in the linked array.
   */
  constructor(node?: T, nextNode?: LinkedNode<T>);

  /** The data stored in the node. */
  public node: T | undefined;

  /** The reference to the next node in the linked array. */
  public nextNode: LinkedNode<T> | undefined;
}

/**
 * Represents a linked array, a data structure that consists of a sequence of elements
 * where each element points to the next element in the sequence.
 * @template T - The type of nodes in the linked array.
 *
 * See repository: https://github.com/FLEYreal/Linked-Lists
 */
export declare class LinkedArray<T = any | undefined> {
  /** Head of the linked array. */
  public start: LinkedNode<T> | undefined;

  /**
   * Creates an instance of LinkedArray.
   * @param {T | T[]} [node] - Optional initial node(s) to populate the linked array.
   */
  constructor(node?: T | T[]);

  /**
   * Retrieves the node at the specified index in the linked array.
   * @param {number} index - The index of the node to retrieve.
   * @returns {LinkedNode<T> | undefined} The node at the specified index, or undefined if the index is out of range.
   * @throws {RangeError} If the index is negative.
   */
  get(index: number): LinkedNode<T> | undefined;

  /**
   * Inserts a node at the end of the linked array.
   * @param {T} node - The node to insert.
   * @throws {NoNodeError} If no node is provided.
   */
  push(node: T): void;

  /**
   * Inserts a node at the beginning of the linked array.
   * @param {T} node - The node to insert.
   * @throws {NoNodeError} If no node is provided.
   */
  shift(node: T): void;

  /** Removes the node at the end of the linked array. */
  pop(): void;

  /** Removes the node at the beginning of the linked array. */
  unshift(): void;
}
