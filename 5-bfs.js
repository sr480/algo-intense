/**
 * Breadth first search
 * 
 * use queue for search
 * [1,2,3,4,5,6,7]
 */
const root = { val: 1, left: { val: 2, left: { val: 4 }, right: { val: 5 } }, right: { val: 3, left: { val: 6 }, right: { val: 7 } } };

function bfs(node) {
  const result = [];
  const queue = [node];
  while(queue.length) {
    const current = queue.pop();
    result.push(current.val);
    if(current.left) {
      queue.unshift(current.left);
    }
    if(current.right) {
      queue.unshift(current.right);
    }
  }
  return result;
}

console.log(bfs(root));
