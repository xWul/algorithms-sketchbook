/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/description/
 */

/*
* Example 1:
* Input: s = "()[]{}"
* Output: true
* Example 2:
* Input: s = "(]"
* Output: false
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const map = {
      '}': '{',
      ']': '[',
      ')': '(',
  };
  
  for (const char of s) {
      const isBracket = (char in map)
      if (!isBracket) { 
        stack.push(char); 
        continue;
      }

      const isEqual = (stack[stack.length - 1] === map[char])
      if (isEqual) { 
        stack.pop(); 
        continue; 
      }

      return false;
  }

  return (stack.length === 0);
};