const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function quickSort(arr) {
  if(arr.length < 2) return arr;
  
  const left = [];
  const right = [];
  
  let min = 1;
  let max = arr.length - 1;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  let pivot = arr[rand];
  
  arr.splice(arr.indexOf(pivot), 1);
  arr = [pivot].concat(arr);
  
  // Sort elements in left and right arrays
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return quickSort(left).concat(pivot, quickSort(right));
}

quickSort(arr);
