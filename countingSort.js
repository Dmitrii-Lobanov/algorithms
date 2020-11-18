// min/max is minumum/maximum value in arr
const countingSort = (arr, min, max) => {
  let i = min,
      j = 0,
      len = arr.length,
      count = [];

  // Set each item's count up to max index to 0
  for (i; i <= max; i++) {
      count[i] = 0;
  }

  // Loop through the arr and increment the value of each item in the count array according to how many times this number is encountered
  for (i = 0; i < len; i++) {
      count[arr[i]] += 1;
  }


  for (i = min; i <= max; i++) {
      while (count[i] > 0) {
          arr[j] = i;
          j++;
          count[i]--;
      }
  }
  return arr;
};

const arr = [3,5,1,43,2,89,1,0,45, 17,19,233,12,0,3];
countingSort(arr, 0, 233);
