/**
 * 62. Unique Paths
 * https://leetcode.com/problems/unique-paths
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  function dfs(row, col, cache) {
    if (row === m  - 1 && col === n - 1) {
      return 1
    }

    if (row >= m || row < 0 || col < 0 || col >= n) {
      return 0
    }

    if (cache[row][col] > 1) {
      return cache[row][col]
    }     

    cache[row][col] = (dfs(row + 1, col, cache) + dfs(row, col + 1, cache)) 
    return cache[row][col]
  }

  const cache = Array.from({ length: m }, () => Array.from({ length: n}, () => 0))
  return dfs(0, 0, cache)
};