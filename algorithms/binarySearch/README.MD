## Binary Search

Binary search is an efficient algorithm used to find a target value in a **sorted array**.

Instead of checking every element one by one, binary search repeatedly divides the search range in half, quickly narrowing down where the target might be.

---

### How it works step-by-step:

1. Start with the entire sorted array.
2. Find the middle element.
3. Compare the middle element with the target:
   - If it matches → return the index.
   - If the target is smaller → search the left half.
   - If the target is larger → search the right half.
4. Repeat the process on the remaining half.
5. Stop when the target is found or the search range becomes empty.

---

### Example:

Search for `7` in `[1, 3, 5, 7, 9, 11]`

- Step 1: middle = `5` → target is greater → search right
- Step 2: middle = `9` → target is smaller → search left
- Step 3: middle = `7` → found ✅

---

#### Key characteristics:

- Works only on **sorted arrays**.
- Repeatedly halves the search space.
- Can be implemented iteratively or recursively.

---

### Time complexity:

- Best case: O(1) (target is in the middle)
- Average case: O(log n)
- Worst case: O(log n)

---

### Pros and cons:

- ✅ Very fast for large sorted datasets.
- ✅ Much more efficient than linear search (O(n)).
- ❌ Requires the data to be sorted first.
- ❌ Not suitable for unsorted data.

---

Binary search is widely used because of its efficiency and is a fundamental algorithm in computer science.