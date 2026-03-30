## Bubble Sort

Bubble sort is a simple sorting algorithm used to arrange elements in a list in a specific order (usually ascending).

It works by repeatedly going through the list and comparing each pair of adjacent elements. If the first element is greater than the second, they are swapped. This way, larger elements gradually "bubble up" to the end of the list with each pass.

The algorithm continues making passes through the list until a complete pass occurs with no swaps, which means the list is fully sorted.

It is a sorting algorithm where the largest values **bubble up to the top**.

### How it works step-by-step:

1. Start at the beginning of the list.
2. Compare the first and second elements.
3. Swap them if they are in the wrong order.
4. Move to the next pair and repeat the comparison.
5. Continue until the end of the list is reached — this completes one pass.
6. Repeat the process for multiple passes until no swaps are needed.

### Key characteristics:

- Easy to understand and implement.
- Works well for small or nearly sorted lists.
- Inefficient for large datasets because it requires many comparisons and swaps.
- Time complexity:
  - Worst and average case: **O(n²)**
  - Best case (already sorted): **O(n)**

### Pseudocode

- Start looping with a variable called i from the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greate than arr[j+1], swap those two values
- Return the sorted array

### Key steps

- Initialize a 'noSwaps' flag to true
- Iterate through the array comparing adjacent elements
- If elements are out of order, swap them and set 'noSwaps' to false
- Repeat the process until no more swaps are needed

Bubble sort is mainly used for educational purposes rather than real-world applications due to its inefficiency.
