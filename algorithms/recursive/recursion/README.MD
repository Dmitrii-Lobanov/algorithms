## Recursion (Detailed Explanation)

Recursion is a programming technique where a function calls itself to solve a problem.

Instead of solving the entire problem at once, recursion breaks it down into smaller, simpler subproblems. Each recursive call works on a smaller piece of the problem until it reaches a point where it can no longer continue — this is called the **base case**.

### How it works step-by-step:

1. Define a base case — a condition where the function stops calling itself.
2. Define the recursive case — where the function calls itself with a smaller or simpler input.
3. Each recursive call moves closer to the base case.
4. Once the base case is reached, the function returns values back through the previous calls.
5. The final result is built as the recursive calls finish.

### Example (factorial):

To calculate `5!` (5 factorial):

- `5! = 5 × 4!`
- `4! = 4 × 3!`
- `3! = 3 × 2!`
- `2! = 2 × 1!`
- `1! = 1` (base case)

Then the results are returned back up:

- `2! = 2 × 1 = 2`
- `3! = 3 × 2 = 6`
- `4! = 4 × 6 = 24`
- `5! = 5 × 24 = 120`

### Key characteristics:

- Requires a base case to avoid infinite loops.
- Breaks problems into smaller subproblems.
- Can make code shorter and easier to understand for certain tasks.
- Uses the call stack, which can lead to higher memory usage.

### Pros and cons:

- ✅ Simple and elegant for problems like tree traversal, factorial, and divide-and-conquer algorithms.
- ❌ Can be slower and use more memory than iterative solutions.
- ❌ Risk of stack overflow if recursion is too deep or missing a base case.

Recursion is widely used in algorithms and data structures, especially when problems can naturally be divided into similar smaller problems.
