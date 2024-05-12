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

Linked Arrays also support methods to work with linked arrays like "get", "push" and etc.
```ts
linkedArray.get(0); // Get node by index from 0.
linkedArray.push("Node"); // Insert node in the end of the linked list.
linkedArray.shift("Node"); // Insert node in the start of the linked list.
linkedArray.pop(); // Remove the last node.
linkedArray.unshift(); // Remove the first node.
```
