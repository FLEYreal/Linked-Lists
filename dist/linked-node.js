/** Class for the linked array node with value of current node and link to the next node */
export class LinkedNode {
    constructor(node, nextNode) {
        // Current node
        this.node = node || undefined;
        // The next node
        this.nextNode = nextNode || undefined;
    }
}
