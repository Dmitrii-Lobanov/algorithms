# Doubly Linked List

A **doubly linked list** is a linear data structure where each node contains a value and two references: one to the next node and one to the previous node. This allows traversal in both directions.

---

## Structure

Each node contains:

- **value** — the data stored in the node
- **next** — a reference to the next node (`null` if last)
- **prev** — a reference to the previous node (`null` if first)

```ts
interface Node<T> {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;
}
```

The list maintains:

- **head** — the first node
- **tail** — the last node
- **length** — total number of nodes

---

## Visualization

```
null ← [A | • | •] ⇄ [B | • | •] ⇄ [C | • | •] → null
        ↑                               ↑
       Head                            Tail
```

---

## Common Operations

| Operation    | Description               | Time Complexity |
| ------------ | ------------------------- | --------------- |
| `append`     | Add node to the end       | O(1)            |
| `prepend`    | Add node to the beginning | O(1)            |
| `remove`     | Remove node at index      | O(n)            |
| `insert`     | Insert node at index      | O(n)            |
| `get(index)` | Access node at index      | O(n)            |
| `set(index)` | Update node value         | O(n)            |
| `traverse`   | Iterate through nodes     | O(n)            |
| `reverse`    | Reverse the list          | O(n)            |

---

## Advantages

- Traversal in both directions (forward and backward)
- Easier node removal (no need to track previous node manually)
- Efficient insertions and deletions at both ends (O(1))

---

## Disadvantages

- Uses more memory than singly linked lists (extra `prev` pointer)
- More complex implementation
- Slightly slower due to additional pointer updates

---

## When to Use

Use a doubly linked list when:

- You need **bidirectional traversal**
- You frequently **insert/remove nodes in the middle**
- You need efficient **backtracking or reverse iteration**

---

## Comparison with Singly Linked List

| Feature      | Singly Linked List | Doubly Linked List |
| ------------ | ------------------ | ------------------ |
| Pointers     | 1 (`next`)         | 2 (`next`, `prev`) |
| Traversal    | One direction      | Two directions     |
| Memory Usage | Lower              | Higher             |
| Removal Ease | Harder             | Easier             |

---

## Summary

A doubly linked list extends a singly linked list by adding backward links, enabling efficient traversal in both directions and simplifying certain operations at the cost of additional memory and complexity.
