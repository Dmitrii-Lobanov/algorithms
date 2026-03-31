/*
  MERGING ARRAYS PSEUDOCODE
  - Create an empty array, take a look at the smallest values in each input array
  - While there are still values we have not looked at:
	- If the value in the first array is smaller than value in the second array, push the value in the first array into our results and move on to the next value in the first array
	- If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
	- Once we exhaust one array, push in all remaining values from the other array
*/

export function merge(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift() as number);
    } else {
      result.push(arr2.shift() as number);
    }
  }

  return result.concat(arr1, arr2);
}

/*
  MERGING SORT PSEUDOCODE
- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays 
  until you are back at the full length of the array
- Once the array has been merged back together, return the merged and sorted array
*/

export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
