# Simple implementation of linked arrays

This library has just 2 classes, it's "LinkedNode" and "LinkedArray".

To create linked array you must create instance of class LinkedArray like here:
```ts
// Option 1 : Insert multiple nodes in the list
const linkedArray = new LinkedArray<number>([12, 24, 48]); // [12, 24, 48];

// Option 2 : Insert single node in the list
const linkedArray = new LinkedArray<string>("Single Node"); // ["Single Node"];

// Option 3 : Insert multiple node without specifying a type
const linkedArray = new LinkedArray([true, -5, ["matrix"], "node"]);

// Option 4 : Insert new nodes with methods
const linkedArray = new LinkedArray();
linkedArray.push("Second");
linkedArray.shift("First");
```

Linked Arrays have some properties that you might use:
```ts
linkedArray.length // Gives the current length of an array.
linkedArray.start // Provides the starting node of the linked array.
```

Linked Arrays also support methods to work with:
```ts
// Get node by index. Throws an error if the length is exceeded
linkedArray.get(0); // Gives the first node. Equivalent of linkedArray.start.
linkedArray.get(-1); // Throws RangeError!
linkedArray.get(linkedArray.length - 1); // Gives you the last node of the linked array

// Insert node in the end of the linked list.
linkedArray.push("Node"); // Inserts Single node.
linkedArray.push(["Node", "Node #2", "Node #3"]); // You can insert multiple nodes.
linkedArray.push([[1, 2, 3]]); // If your linked array consists of regular arrays and you need to insert just a single array, try this.
linkedArray.shift("Node"); // Insert the node in the start

// Methods to remove nodes
linkedArray.remove(1); // Remove the node by id.
linkedArray.pop(); // Remove the last node. Uses linkedArray.remove() under the hood.
linkedArray.unshift(); // Remove the first node. Also uses linkedArray.remove() under the hood.
```

There's also ListNode class, it's a particular class for nodes inside linked array.
They contain 2 fields of the current node (.node) and the next node (.nextNode).
The next node is also instance of LinkedNode containing value and link to the next node.

```ts
linkedArray.get(0).node // Returns value of the node
linkedArray.get(0).nextNode // Returns instance of LinkedNode of the next node
```
