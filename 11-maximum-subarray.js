/**
 * Maximum sub array
 */

function getMaxSubArray(arr) {
  const sums = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sums[i] = sum;
  }

  let maxIdx = 0;
  let max = sums[0];
  let minIdx = 0;
  let min = sums[0];
  for (let i = 1; i < sums.length; i++) {
    if (min > sums[i]) {
      min = sums[i];
      minIdx = i;
    }
    if (max < sums[i]) {
      max = sums[i];
      maxIdx = i;
    }
  }

  return  sums[maxIdx] - sums[minIdx];
}

console.log(getMaxSubArray([5, -10, 4, 8, -5]));
//[ 5, -5, -1, 7, 2 ]