export function quickSort(nums: number[]): number[] {
  if (nums.length <= 1) return nums;

  const pivot = nums[nums.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
