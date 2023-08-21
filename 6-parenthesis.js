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

  for (i = 0; i < input.length / 2; i++) {
    if (MATCHES[input[i]] !== input[input.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isValidParenthesis('[{({[{}]})}]'));