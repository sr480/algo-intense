/**
 * Binnary search in sorted array
 * [1,2,3,4,5,6,7,8]
 * 
 * got to center
 * go left or right
 */

function binnarySearch(arr, lookup) {
  let h = arr.length;
  let l = 0;
  while(l < h) {
    let c = Math.floor((h + l) / 2);
    if (arr[c] > lookup) {
      h = c;
    } else {
      l = c + 1;
    }
  }
  return l - 1;
}

console.log(binnarySearch([1,2,3,4,5,6,7,8], 7));