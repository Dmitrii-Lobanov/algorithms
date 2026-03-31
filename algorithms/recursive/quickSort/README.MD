## Quick Sort

Quick sort is a fast and efficient sorting algorithm that uses a **divide-and-conquer** approach to sort elements in a list.

It works by selecting a **pivot** element and rearranging the list so that all elements smaller than the pivot come before it, and all elements greater than the pivot come after it. This process is called **partitioning**.

### How it works step-by-step:

1. Choose a pivot element from the list (commonly the first, last, or middle element).
2. Rearrange the list so that:
   - All elements less than the pivot are placed on the left side.
   - All elements greater than the pivot are placed on the right side.
3. The pivot is now in its correct sorted position.
4. Recursively apply the same process to the left and right sublists.
5. Continue until all sublists contain one or zero elements.

### Example:

To sort `[5, 3, 8, 4, 2]`:

- Choose pivot → `5`
- Partition → `[3, 4, 2] | 5 | [8]`
- Sort left → `[2, 3, 4]`
- Right side already sorted → `[8]`
- Final result → `[2, 3, 4, 5, 8]`

### Key characteristics:

- Uses recursion and partitioning.
- Pivot selection affects performance.
- Often sorts in-place (low memory usage).
- Not a stable sort (order of equal elements may change).

### Time complexity:

- Best case: **O(n log n)**
- Average case: **O(n log n)**
- Worst case: **O(n²)** (when pivot choices are poor, e.g., already sorted array with bad pivot)

### Pros and cons:

- ✅ Very fast in practice and widely used.
- ✅ Efficient memory usage (in-place).
- ✅ Works well for large datasets.
- ❌ Worst-case performance can be slow.
- ❌ Not stable by default.

Quick sort is one of the most popular sorting algorithms because of its speed and efficiency in real-world applications.
