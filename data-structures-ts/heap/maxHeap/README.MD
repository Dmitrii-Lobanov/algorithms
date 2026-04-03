# Max Heap (Binary Heap)

A **Max Heap** is a specialized tree-based data structure that satisfies the **heap property**:

The value of each parent node is **greater than or equal to** the values of its children.

This ensures that the **maximum element is always at the root**.

---

## 🌳 Structure

- A Max Heap is a **complete binary tree**
- It is typically implemented using an **array**
- For any node at index `i`:
  - Left child → `2i + 1`
  - Right child → `2i + 2`
  - Parent → `Math.floor((i - 1) / 2)`

---

## 📦 Core Operations

- **insert(value)** → Adds a new value and restores heap order (bubble up)
- **extractMax()** → Removes and returns the root (largest value)
- **peek()** → Returns the maximum value without removing it
- **buildHeap(array)** → Converts an array into a heap in O(n)

---

## 🔁 Heap Property

For every node `i`:

```

heap[i] >= heap[leftChild]
heap[i] >= heap[rightChild]

```

---

## ⏱️ Time Complexity

| Operation  | Time Complexity |
| ---------- | --------------- |
| insert     | O(log n)        |
| extractMax | O(log n)        |
| peek       | O(1)            |
| buildHeap  | O(n)            |

---

## 🔧 How It Works

### Insert (Bubble Up)

1. Add the new value at the end
2. Compare it with its parent
3. Swap until the heap property is restored

### Extract Max (Sink Down)

1. Remove the root (max value)
2. Move the last element to the root
3. Swap it down with the larger child until valid

---

## 🔥 Use Cases

- Priority queues
- Task scheduling systems
- Finding top-K largest elements
- Streaming maximum values
- Heap Sort algorithm

---

## 📊 Example

```text
Insert: 10, 5, 20, 15

Heap:
        20
       /  \
     15    10
    /
   5
```

---

## 🔃 Heap Sort

Max Heap is commonly used to implement **Heap Sort**:

1. Build a Max Heap from the array
2. Repeatedly extract the maximum element
3. Place it at the end of the array

Result → Sorted array in ascending order

---

## 🧩 Summary

A Max Heap is an efficient structure for quickly accessing and removing the largest element, making it ideal for priority-based operations and sorting algorithms.
