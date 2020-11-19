// Comparing real time executing operations with Set and array

const arr = [];
const set = new Set();
const n = 1e6;

for (let i = 0; i < n; i++) {
  arr.push(i);
  set.add(i);
}

let result;

// Search an item
console.time('Array');
result = arr.indexOf(123123);
console.timeEnd('Array');

console.time('Set');
result = set.has(123123);
console.timeEnd('Set');

// Add an item
console.time('Array'); 
arr.push(n);
console.timeEnd('Array');

console.time('Set'); 
set.add(n);
console.timeEnd('Set');

// Delete an item
function deleteFromArr(arr, item) {
  const index = arr.indexOf(item);
  return index !== -1 && arr.splice(index, 1);
}

console.time('Array'); 
deleteFromArr(arr, n);
console.timeEnd('Array');

console.time('Set'); 
set.delete(n);
console.timeEnd('Set');

// Filter out unique values using Set
const duplicateCollection = ["A", "B", "B", "C", "D", "B", "C"];

// If you want to store a collection as a Set
let uniqueCollectionSet = new Set(duplicateCollection);

// If you want to keep a collection as an array
let uniqueCollectionArr = [...uniqueCollectionSet];
