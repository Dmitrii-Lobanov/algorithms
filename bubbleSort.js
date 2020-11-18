const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function bubbleSort(arr) {
  if(arr.length < 2) return arr;
  
  // Included to avoid iterating over sorted array;
  let swapped;
  
  do{
    swapped = false;
    for(let i = 0; i < arr.length; i++) {
      // Swap elements if next is smaller
      if(arr[i] > arr[i + 1]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swapped = true;
      }
    }
  } while(swapped);
  
  return arr;
}

bubbleSort(arr);
