/**
 * 994. Rotting Oranges
 * https://leetcode.com/problems/rotting-oranges/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function (grid) {
    const ROWS = grid.length
    const COLS = grid[0].length
    const queue = []
    let fresh = 0
    let time = 0
  
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (grid[row][col] === 1) {
          fresh += 1
        }
  
        if (grid[row][col] === 2) {
          queue.push([row, col])
        }
      }
    }
  
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (fresh > 0 && queue.length > 0) {
      const length = queue.length;
      for (let i = 0; i < length; i++) {
        const [r, c] = queue.shift()
  
        for (const [dr, dc] of directions) {
          const row = r + dr
          const col = c + dc
          if (row >= 0 && row < ROWS && col >= 0 && col < COLS && grid[row][col] == 1) {
            grid[row][col] = 2
            queue.push([row, col])
            fresh -= 1
          }
        }
      }
      time += 1
    }
    return fresh === 0 ? time : -1
  };