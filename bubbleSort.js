/*
  A sorting algorithm where the largest values bubble up to the top. 
  
  Visualisation: https://visualgo.net/en/sorting
*/

/* PSEUDOCODE
  - Start looping with a variable called i from the end of the array towards the beginning
  - Start an inner loop with a variable called j from the beginning until i - 1
  - If arr[j] is greate than arr[j+1], swap those two values
  - Return the sorted array
*/ 

function swap(arr, idx1, idx2) {
  return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort(arr) {
  // Variable to check if were any swaps in the loop 
  // to avoid iterations on already sorted array
  let noSwaps;
  
  for(let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([35,12,76,32,1,12]);
