// FREQUENCY COUNTER

// Create function same which check if the second array contains all the values of the first array squared

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  // Create objects for each array which contain value as key and frequency count as value
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // Fill objects with keys/values
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // Iterate over keys in object
  for (let key in frequencyCounter1) {
    // False if there is no match key in the seccond object
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // False if values of the certain key do not match, i.e. frequency count is different
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);


// MULTIPLE POINTERS

/* Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined 
if a pair does not exist */

const sumZero = (arr: number[]): number[] => {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if(sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-4,-3,-2,-1,0, 1,2,5]);

// SLIDING WINDOW

/* Write a function which accepts an array of integers and a number (n). 
The function should calculate the maximum sum of n consecutive elements in the array  */

const maxSubarraySum = (arr, n) => {
  if(n > arr.length) return null;
  
  let max = 0;
  let temp = 0;
  
  for(let i = 0; i < n; i++) {
    max += arr[i];
  }
  
  temp = max;
  
  for(let i = n; i < arr.length; i++) {
    // Subtract the first element and add the new last element
    temp = temp - arr[i - n] + arr[i];
    max = Math.max(max, temp);
  }
  
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
maxSubarraySum([2,6],3)
