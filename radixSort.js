/*
  RADIX SORT HELPERS
*/

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

/*
  RADIX SORT PSEUDOCODE
  - Figure out how many digits the largest number has
  - Loop from k = 0 up to the largest number of digits 
  - For each iteration of the loop:
    - Create buckets for each digit (0 to 9)
    - Place each number in the corresponding bucket based on the kth digit
  - Replace our existing array with values in our buckets, starting with 0 and going up to 9
  - Return the list at the end
*/

function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);
  
  for(let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for(let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = digitBuckets.flat();
  }
  return nums;
}

const nums = [567, 99012132, 1,53445,1212,4342312,3];

radixSort(nums);
