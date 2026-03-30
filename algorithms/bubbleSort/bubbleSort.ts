export function swap(arr: number[], idx1: number, idx2: number) {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
}

export function bubbleSort(arr: number[]) {
  if (!arr.length || arr.length === 1) return arr;

  // Variable to check if were any swaps in the loop
  // to avoid iterations on already sorted array
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}
