// ./src/linked-array.ts
// Modules
import { LinkedNode } from "./linked-node.js";
import { NoNodeError } from "./errors.js";
/**
 * Pure implementation of linked list in the JavaScript. Linked lists have their
 * benefits relative to regular arrays like more optimized way to insert nodes in the
 * start but linked lists are still have very specific use-cases because in most other
 * characteristics regular arrays are still superior to linked lists.
 *
 * @template T - The type of nodes in the linked array. Specify this type to restrict the linked array to only hold nodes of the defined type.
 */
export class LinkedArray {
    constructor(node) {
        // No Nodes Provided
        if (node === undefined)
            return;
        // Nodes are in the array
        if (node instanceof Array)
            for (let i = node.length; 0 < i; i--) {
                // Insert nodes in order
                this.shift(node[i - 1]);
            }
        // Insert single node
        else {
            this.start = new LinkedNode(node);
        }
    }
    /**
     * Get a node of the defined index
     *
     * @prop {number} index - Index of the node to find
     */
    get(index) {
        // Negative index of the linked list cannot exist
        if (index < 0)
            throw new RangeError("Index cannot be negative");
        // Iterable node and counter as index of the node
        let itr = this.start;
        let counter = 0;
        while (true) {
            // If no iterable found
            if (!itr)
                break;
            // Return found node
            if (index === counter)
                return itr;
            // Move to next node and increment counter
            itr = itr.nextNode;
            counter += 1;
        }
    }
    /**
     * Insert node in the end of the linked array
     */
    push(node) {
        // No node provided to method
        if (node === undefined)
            throw new NoNodeError();
        // If linked array is empty, set heading node
        if (this.start === undefined) {
            this.start = new LinkedNode(node, undefined);
            return;
        }
        // Iterable node
        let itr = this.start;
        // Move to the next node until reaching the last
        while (itr.nextNode) {
            itr = itr.nextNode;
        }
        // Push new node in the end of the list.
        itr.nextNode = new LinkedNode(node, undefined);
    }
    /** Insert node in the start of the linked array */
    shift(node) {
        // No node provided to method
        if (node === undefined)
            throw new NoNodeError();
        // Create new start of the linked array
        const newStart = new LinkedNode(node, this.start);
        // Update starting position
        this.start = newStart;
    }
    /** Remove node in the end of the linked array */
    pop() { }
    /** Remove node in the start of the linked array */
    unshift() { }
}
