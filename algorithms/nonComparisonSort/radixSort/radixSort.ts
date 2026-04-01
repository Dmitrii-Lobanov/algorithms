export function getDigit(num: number, i: number) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

export function digitCount(num: number) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

export function longestNumber(nums: number[]) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

export function radixSort(nums: number[]) {
  const maxDigitCount = longestNumber(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets: number[][] = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = digitBuckets.flat();
  }
  return nums;
}
