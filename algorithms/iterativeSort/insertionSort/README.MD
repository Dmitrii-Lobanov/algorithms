## Insertion Sort (Detailed Explanation)

Insertion sort is a simple sorting algorithm that builds a sorted list one element at a time.

It works by taking each element from the list and inserting it into its correct position within the already sorted portion of the list. At the beginning, the first element is considered sorted, and the algorithm gradually expands the sorted section.

### How it works step-by-step:

1. Start with the second element of the list (the first element is already considered sorted).
2. Compare the current element with the one before it.
3. If it is smaller, shift the larger element one position to the right.
4. Continue comparing and shifting elements until the correct position is found.
5. Insert the current element into its correct position.
6. Move to the next element and repeat the process until the entire list is sorted.

### Key characteristics:

- Easy to understand and implement.
- Efficient for small or nearly sorted lists.
- Works by shifting elements rather than swapping repeatedly.
- Time complexity:
  - Worst and average case: **O(n²)**
  - Best case (already sorted): **O(n)**

Insertion sort is more efficient than bubble sort in practice, especially when the list is partially sorted, but it is still not suitable for very large datasets.

### Example:

[3, 2, 5, 4, 1]

```
    ↓

[3, 2, 5, 4, 1] // the ↓ is the number we're looking to insert, everything before is sorted
```

Is 2 larger than 3? No. Move 3 to the right.
Beginning of list, insert 2 at index 0.

```
       ↓

[2, 3, 5, 4, 1]
```

Is 5 larger than 3? Yes.
Insert after 3 (it's already there so it doesn't move)

```
          ↓

[2, 3, 5, 4, 1]
```

Is 4 larger than 5? No. Move 5 to the right.
Is 4 larger than 3? Yes.
Insert after 3 at index 2.
```
             ↓

[2, 3, 4, 5, 1]
```

Is 1 larger than 5? No. Move 5 to the right.
Is 1 larger than 4? No. Move 4 to the right.
Is 1 larger than 3? No. Move 3 to the right.
Is 1 larger than 2? No. Move 2 to the right.
Beginning of list, insert 1 at index 0

[1, 2, 3, 4, 5]

Reached end of list, list is sorted.
