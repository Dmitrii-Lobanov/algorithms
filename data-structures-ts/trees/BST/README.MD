# Binary Search Tree (BST)

A **Binary Search Tree (BST)** is a hierarchical data structure where each node contains a value and up to two children. It maintains a specific ordering property that enables efficient searching, insertion, and deletion.

---

## Structure

Each node contains:

- **value** — the data stored in the node
- **left** — reference to the left child
- **right** — reference to the right child

```ts
interface BSTNode<T> {
  value: T;
  left: BSTNode<T> | null;
  right: BSTNode<T> | null;
}
```

The tree maintains:

* **root** — the top node of the tree

---

## BST Property

For every node:

```

left subtree values < node value < right subtree values

```

This rule applies recursively to every subtree.

---

## Visualization

```

        10
       /  \
      5    15
     / \     \
    3   7     20

````

---

## Common Operations

| Operation         | Description             | Time Complexity |
| ----------------- | ----------------------- | --------------- |
| `insert`          | Add a new value         | O(log n)*       |
| `find`            | Search for a value      | O(log n)*       |
| `delete`          | Remove a value          | O(log n)*       |
| `BFS`             | Breadth-first traversal | O(n)            |
| `DFS (PreOrder)`  | Root → Left → Right     | O(n)            |
| `DFS (InOrder)`   | Left → Root → Right     | O(n)            |
| `DFS (PostOrder)` | Left → Right → Root     | O(n)            |

> *O(log n) applies to balanced trees; worst case is O(n)*

---

## Traversal Types

### In-Order (Sorted Order)

```text
Left → Root → Right
````

Returns values in **ascending order** for a valid BST.

---

### Pre-Order

```text
Root → Left → Right
```

Useful for **copying or serializing** the tree.

---

### Post-Order

```text
Left → Right → Root
```

Useful for **deleting nodes** or evaluating trees.

---

### Breadth-First Search (BFS)

```text
Level by level traversal
```

Uses a **queue** to visit nodes horizontally.

---

## Deletion Cases

When removing a node, three scenarios exist:

1. **No children (leaf node)**
   → Simply remove it

2. **One child**
   → Replace node with its child

3. **Two children**
   → Replace with the **in-order successor** (smallest value in right subtree)

---

## Advantages

- Efficient searching, insertion, and deletion (average O(log n))
- Maintains sorted data structure
- Flexible and dynamic size

---

## Disadvantages

- Can become **unbalanced** → degrades to O(n)
- More complex than arrays
- No constant-time random access

---

## When to Use

Use a BST when:

- You need **fast lookups and inserts**
- Data must remain **sorted**
- You perform frequent **search operations**

---

## Comparison with Other Structures

| Feature       | Array      | BST            |
| ------------- | ---------- | -------------- |
| Search        | O(n)       | O(log n)\*     |
| Insert/Delete | O(n)       | O(log n)\*     |
| Sorted Order  | Manual     | Automatic      |
| Memory        | Contiguous | Non-contiguous |

---

## Summary

A Binary Search Tree is an efficient and flexible data structure for maintaining ordered data. Its performance depends heavily on balance, making it ideal for many search-heavy applications but less optimal when unbalanced.
