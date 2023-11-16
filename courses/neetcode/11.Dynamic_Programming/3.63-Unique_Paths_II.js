/**
 * 63. Unique Paths II
 * https://leetcode.com/problems/unique-paths-ii
 */

 /**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const ROWS = obstacleGrid.length
  const COLS = obstacleGrid[0].length

  if (obstacleGrid[ROWS - 1][COLS - 1] == 1) {
    return 0
  }

  function dfs(row, col, cache) {
    if (row === ROWS - 1 && col === COLS - 1) {
      return 1
    }

    if (row >= ROWS || row < 0 || col >= COLS || col < 0 || obstacleGrid[row][col] == 1) {
      return 0
    }

    if (cache[row][col] > 0) {
      return cache[row][col]
    }

    cache[row][col] = dfs(row + 1, col, cache) + dfs(row, col + 1, cache) 
    return cache[row][col]
  }

  const cache = Array.from({length: ROWS}, () => Array.from({ length: COLS}, () => 0))
  return dfs(0, 0, cache)
};