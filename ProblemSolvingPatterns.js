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
