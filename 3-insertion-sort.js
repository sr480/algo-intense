/**
 * Insertion sort
 * [1,2,3,4,6,9,5,3]
 * Find next element if it is lower than previous, find place in before part
 * 
 * 
 */

function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i] < arr[i + 1]) {
      continue;
    }
    
    for(let j = i; 0 < j; j--) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(insertionSort([1,2,3,4,6,9,5,3]));