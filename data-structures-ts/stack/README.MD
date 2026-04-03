# Stack (Data Structure)

A **stack** is a linear data structure that follows the **LIFO (Last In, First Out)** principle.

This means the last element added to the stack is the first one to be removed.

---

## 📦 Core Operations

- **push(value)** → Adds an element to the top of the stack
- **pop()** → Removes and returns the top element
- **peek() / top()** → Returns the top element without removing it
- **isEmpty()** → Checks if the stack is empty

---

## 🧠 Key Characteristics

- Access is restricted to the **top element only**
- No random access (unlike arrays)
- Simple and efficient for managing ordered data

---

## ⏱️ Time Complexity

| Operation | Time |
| --------- | ---- |
| push      | O(1) |
| pop       | O(1) |
| peek      | O(1) |

---

## 🏗️ Implementation

Stacks can be implemented using:

- Arrays (dynamic resizing)
- Linked Lists (more flexible memory usage)

---

## 🔥 Common Use Cases

- Function call stack (recursion)
- Undo/Redo operations
- Expression evaluation (e.g., parsing)
- Backtracking algorithms (DFS)
- Browser history navigation

---

## 📊 Example

```text
Push: 1 → 2 → 3

Stack (top → bottom):
3
2
1

Pop → removes 3
```

---

## 💡 Variants

- **Min Stack** → supports retrieving the minimum element in O(1)
- **Max Stack** → supports retrieving the maximum element in O(1)

---

## 🧩 Summary

A stack is a simple yet powerful structure used whenever you need to process data in reverse order or manage nested operations efficiently.
