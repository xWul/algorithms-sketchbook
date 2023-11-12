/**
 * 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 1) {
    return n
  }
  let dp = [];
  dp[0] = 1;
  dp[1] = 2;
  let i = 3

  while (n >= i) {
    console.log({dp})
    let temp = dp[1]
    dp[1] = dp[0] + dp[1];
    dp[0] = temp
    i++
  }
  return dp[1]
};