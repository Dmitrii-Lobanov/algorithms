export function nestedAddition(arr: unknown[]): number {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (Array.isArray(current)) {
      sum += nestedAddition(current);
    } else {
      // Base case
      sum += current as number;
    }
  }

  return sum;
}
