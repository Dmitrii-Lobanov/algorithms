// An iterative implementation
export function binarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

// A recursive implementation
export function binarySearch2(arr: number[], target: number) {
  return binarySearchFunc(arr, target, 0, arr.length - 1);
}

function binarySearchFunc(
  arr: number[],
  target: number,
  left: number,
  right: number,
) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) {
    return binarySearchFunc(arr, target, left, mid - 1);
  } else {
    return binarySearchFunc(arr, target, mid + 1, right);
  }
}
