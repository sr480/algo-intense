/**
 * Depth first search
 *     7
 *   3
 *     6
 * 1 
 *     4
 *   2
 *     5
 * 
 * Find root,
 * go left,
 * go right
 * Answer 
 * [1,2,4,5,3,6,7]
 */

const root = { val: 1, left: { val: 2, left: { val: 4 }, right: { val: 5 } }, right: { val: 3, left: { val: 6 }, right: { val: 7 } } };

function dfs(node) {
  const result = [node.val];
  if (node.left) {
    result.push(...dfs(node.left));
  }
  if (node.right) {
    result.push(...dfs(node.right));
  }
  return result;
}

console.log(dfs(root));