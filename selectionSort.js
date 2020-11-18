const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i + 1; j < arr.length; j++) {
      // if next element is greater, then assign min to index of next element
      if(arr[min] > arr[j]) {
        min = j;
      }
    }
    if(min !== i) {
      // swap elements
      [arr[i], arr[min]] = [arr[min], arr[i]]
    }
  }
  return arr;
}

selectionSort(arr);
