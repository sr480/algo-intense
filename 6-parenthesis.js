/***
 * Valid parenthesis
 * 
 * 
 * 
 */

const MATCHES = {
  '[': ']',
  '{': '}',
  '(': ')'
};

function isValidParenthesis(input) {
  if (input.length % 2 !== 0) {
    return false;
  }

  const stack = [];

  for (i = 0; i < input.length; i++) {
    const closing = MATCHES[input[i]];
    if (closing) {
      stack.push(closing);
    } else {
      if(stack.pop() !== input[i]) {
        return false;
      }
    } 
  }
  return true;
}

console.log(isValidParenthesis('[][]'));