export function fibonacci(n: number): number {
  // base case
  if (n <= 0) {
    return 0;
  }

  if (n === 2 || n === 1) {
    return 1;
  }

  // recursive calls
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function fibonacciMemoized(n: number): number {
  // Memoization
  const sequence = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }

  return sequence[n];
}
