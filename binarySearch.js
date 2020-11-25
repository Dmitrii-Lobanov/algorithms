const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];


// An iterative implementation
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(target === arr[mid]) {
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
function binarySearch(arr, target) {
  return binarySearchFunc(arr, target, 0, arr.length - 1);
}

function binarySearchFunc(arr, target, left, right) {
  if(left > right) return -1;
  
  let mid = Math.floor((left + right) / 2);
  if(target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) {
    return binarySearchFunc(arr, target, left, mid - 1);
  } else {
    return binarySearchFunc(arr, target, mid + 1, right);
  }
}

binarySearch(arr, 41);
