/**
 * 1091. Shortest Path in Binary Matrix
 * https://leetcode.com/problems/shortest-path-in-binary-matrix
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
 
var shortestPathBinaryMatrix = function(grid) {
    const N = grid.length
    const queue = [[0, 0, 1]] // ROW, COL, Length
    const visit = new Set()
    visit.add(`0-0`)

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0],
                        [1, 1], [-1, -1], [1, -1], [-1, 1]]
    while(queue.length > 0 ){
      const [row, col, length] = queue.shift()
      if (Math.min(row, col) < 0 || Math.max(row, col) >= N || grid[row][col]) {
        continue
      }

      if (row == N - 1 && col == N - 1) {
        return length
      }

      for (const [dr, dc] of directions) {
        const newRow = row + dr
        const newCol = col + dc

        if (!visit.has(`${newRow}-${newCol}`)) {
          queue.push([newRow, newCol, length + 1])
          visit.add(`${newRow}-${newCol}`)
        }
      }
    }

    return -1
};