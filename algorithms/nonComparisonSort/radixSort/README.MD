## Radix Sort

Radix sort is a non-comparative sorting algorithm that sorts numbers by processing their digits one at a time.

Instead of comparing elements directly (like quick sort or merge sort), radix sort groups numbers based on their digits (units, tens, hundreds, etc.) and sorts them step by step.

---

### How it works step-by-step:

1. Find the maximum number to determine how many digits are needed.
2. Start with the least significant digit (rightmost digit).
3. Place numbers into buckets based on the current digit (0–9).
4. Collect the numbers back in order from the buckets.
5. Move to the next digit (tens, hundreds, etc.).
6. Repeat the process until all digits have been processed.

---

### Pseudocode

- Figure out how many digits the largest number has
- Loop from k = 0 up to the largest number of digits
- For each iteration of the loop:
  - Create buckets for each digit (0 to 9)
  - Place each number in the corresponding bucket based on the kth digit
- Replace our existing array with values in our buckets, starting with 0 and going up to 9
- Return the list at the end

### Time complexity:

Best case: **O(nk)**

Average case: **O(nk)**

Worst case: **O(nk)**

Where:

n = number of elements
k = number of digits in the largest number

### Pros and cons:

✅ Very fast for large lists of numbers with limited digit length.
✅ Linear time under certain conditions.
✅ Stable sort (preserves order of equal elements).
❌ Requires extra memory for buckets.
❌ Not suitable for all data types (mainly integers or strings).
❌ Performance depends on number of digits.

Radix sort is especially useful when sorting large datasets of numbers where comparison-based algorithms would be slower.

### Example:

Sort `[170, 45, 75, 90, 802, 24, 2, 66]`

- Step 1 (units place):
  → `[170, 90, 802, 2, 24, 45, 75, 66]`

- Step 2 (tens place):
  → `[802, 2, 24, 45, 66, 170, 75, 90]`

- Step 3 (hundreds place):
  → `[2, 24, 45, 66, 75, 90, 170, 802]`

Final sorted array:

```text
[2, 24, 45, 66, 75, 90, 170, 802]
```
