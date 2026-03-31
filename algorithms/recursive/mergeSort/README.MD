## Merge Sort

Merge sort is an efficient sorting algorithm that uses a **divide-and-conquer** approach to sort a list of elements.

Instead of sorting the list all at once, merge sort divides the list into smaller sublists, sorts those sublists, and then merges them back together in the correct order.

### How it works step-by-step:

1. Divide the list into two halves.
2. Recursively apply merge sort to each half until each sublist contains only one element (a single element is already sorted).
3. Merge the sorted sublists back together by comparing elements and placing them in the correct order.
4. Continue merging until the entire list is combined into a fully sorted list.

### Example:

To sort `[5, 3, 8, 4]`:

- Split → `[5, 3]` and `[8, 4]`
- Split again → `[5] [3] [8] [4]`
- Merge → `[3, 5]` and `[4, 8]`
- Final merge → `[3, 4, 5, 8]`

### Key characteristics:

- Uses recursion and divide-and-conquer strategy.
- Always divides the array into smaller parts before sorting.
- Merging step is where the actual sorting happens.
- Requires additional space for merging.

### Time complexity:

- Best case: **O(n log n)**
- Average case: **O(n log n)**
- Worst case: **O(n log n)**

### Pros and cons:

- ✅ Very efficient for large datasets.
- ✅ Stable sort (preserves order of equal elements).
- ✅ Predictable performance.
- ❌ Requires extra memory (not in-place).
- ❌ Slightly more complex than simple algorithms like bubble or insertion sort.

Merge sort is widely used in practice because of its consistent performance and reliability, especially when working with large amounts of data.
