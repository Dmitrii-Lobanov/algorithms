const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let tmp = arr[i];
    while(j >= 0 && arr[j] > tmp) {
      nums[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = tmp;
  }
  
  return arr;
}

insertionSort(arr);
