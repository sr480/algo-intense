/**
 * Selection sort
 * [1,2,3,4,6,9,7,14]
 * -sorted----  ?
 * after sorted part lookup for minimum
 * place the next minimum number
 */


function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minVal = arr[i];
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (minVal > arr[j]) {
        minVal = arr[j];
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      arr[minIdx] = arr[i];
      arr[i] = minVal;
    }
  }

  return arr;
}

console.log(selectionSort([1, 2, 3, 4, 6, 9, 7, 14]));