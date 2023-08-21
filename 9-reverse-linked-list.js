/**
 * Reverse linked list
 */

const data = { val: 1, next: { val: 2, next: { val: 3, next: null } } };

function reverse(start) {
  let current = start;
  let prev = null;
  while(current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

console.log(reverse(data));