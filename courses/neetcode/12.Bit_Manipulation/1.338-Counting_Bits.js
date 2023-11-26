/**
 * 338. Counting Bits
 * https://leetcode.com/problems/counting-bits/
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let dp = n > 1 ? Array(n - 1).fill(0) : [0]
  offset = 1

  for (let i = 1; i <= n; i++) {
    if (offset * 2 == i) {
      offset = i
    }
    dp[i] = 1 + dp[i - offset]
  }

  return dp
};