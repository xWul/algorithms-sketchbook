/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0
  }

  const ROWS = grid.length
  const COLS = grid[0].length
  const visit = new Set()
  let maxArea = 0

  function dfs(row, col, count) {
    if (row < 0 || row >= ROWS || col < 0 || col >= COLS || grid[row][col] == "0" || visit.has(`${row}-${col}`)) {
      return;
    }

    visit.add(`${row}-${col}`)
    count.push(`${row}-${col}`)
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    for (const [dr, dc] of directions) {
      dfs(row + dr, col + dc, count)
    }
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const count = []
      if (grid[r][c] === "1" || !visit.has(`${r}-${c}`)) {
        dfs(r, c, count)
      }
      if (count.length > maxArea) {
        maxArea = count.length 
      }
    }
  }

  return maxArea
};