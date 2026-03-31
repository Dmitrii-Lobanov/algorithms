export function factorial(n: number): number {
  // Base case
  if (n < 2) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

export function factorialMemoized(n: number, memo: number[] = []): number {
  if (n === 0 || n === 1) return 1;
  if (memo[n]) return memo[n];

  memo[n] = n * factorialMemoized(n - 1, memo);
  return memo[n];
}
