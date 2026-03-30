export function insertionSort(arr: number[]) {
  if (!arr.length || arr.length === 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    let j;
    let numberToInsert = arr[i];

    for (j = i - 1; arr[j] > numberToInsert; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = numberToInsert;
  }

  return arr;
}
