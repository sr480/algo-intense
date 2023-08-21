/**
 * Permutations
 * input 3
 * [1,2,3]
 * [1,3,2]
 * [3,2,1]
 * [2,3,1]
 * 
 * backtracking
 * 
 */


function permutate(limit, nums = new Set()) {
  if (nums.size === limit) {
    return [[...nums.keys()]];
  }
  const result = [];
  for (let i = 1; i <= limit; i++) {
    if (!nums.has(i)) {
      const nextNums = new Set(nums);
      nextNums.add(i);
      result.push(permutate(limit, nextNums));
    }
  }
  return result.flat(1);
}

console.log(permutate(3));