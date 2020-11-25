/*
  Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position. 
  
  Visualisation: https://visualgo.net/en/sorting
*/

/*
PSEUDOCODE:
  - Store the first element as the smallest value you have seen so far
  - Compare this item to the next item in the array until you find a smaller number
  - If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array
  - If the minimum is not the value (index) you initially began with, swap the two values
  - Repeat this with next element until the array is sorted
*/

function swap(arr, idx1, idx2) {
  return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[min] > arr[i]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(arr, min, i);
    }
  }
  
  return arr;
}

const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
selectionSort(arr);
