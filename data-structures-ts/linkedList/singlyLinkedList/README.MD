# Singly Linked List

A **singly linked list** is a linear data structure made up of nodes, where each node stores a value and a reference to the next node in the sequence. Unlike arrays, elements are not stored in contiguous memory locations.

---

## Structure

Each node contains:

* **value** — the data stored in the node
* **next** — a reference to the next node, or `null` if it is the last node

```ts
interface Node<T> {
  value: T;
  next: Node<T> | null;
}
```

The linked list itself maintains:

* **head** — the first node in the list
* **tail** — the last node in the list
* **length** — the number of nodes

---

## Visualization

```
Head → [A | •] → [B | •] → [C | •] → null
                        ↑
                       Tail
```

---

## Common Operations

| Operation       | Description                    | Time Complexity |
| --------------- | ------------------------------ | --------------- |
| `push`          | Add node to the end            | O(1)            |
| `pop`           | Remove node from the end       | O(n)            |
| `shift`         | Remove node from the beginning | O(1)            |
| `unshift`       | Add node to the beginning      | O(1)            |
| `get(index)`    | Retrieve node by index         | O(n)            |
| `set(index)`    | Update node value              | O(n)            |
| `insert(index)` | Insert node at index           | O(n)            |
| `remove(index)` | Remove node at index           | O(n)            |
| `traverse`      | Iterate through the list       | O(n)            |

---

## Advantages

* Dynamic size (can grow or shrink easily)
* Efficient insertions and removals at the head
* Does not require contiguous memory

---

## Disadvantages

* No direct access by index (requires traversal)
* Extra memory usage for storing references
* Slower than arrays for random access

---

## When to Use

Use a singly linked list when:

* You need frequent insertions and deletions
* The collection size changes often
* Sequential access is sufficient

---

## Comparison with Arrays

| Feature       | Array      | Linked List    |
| ------------- | ---------- | -------------- |
| Access        | O(1)       | O(n)           |
| Insert/Delete | O(n)       | O(1) (at head) |
| Memory        | Contiguous | Non-contiguous |

---

## Summary

A singly linked list is a simple and flexible data structure that is well-suited for managing sequences of data where efficient insertions and dynamic sizing are more important than fast random access.
