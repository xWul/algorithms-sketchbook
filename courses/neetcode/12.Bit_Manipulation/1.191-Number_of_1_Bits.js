/**
 * 191. Number of 1 Bits
 * https://leetcode.com/problems/number-of-1-bits/
 */

 /**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let result = 0
  while(n) {
    n &= (n - 1)
    result += 1
  }

  return result
};
