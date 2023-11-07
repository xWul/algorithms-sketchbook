/**
 * 200. Number of Islands
 * https://leetcode.com/problems/number-of-islands/
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // Verify if grid exists
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  // create a visit set to store nodes visited
  const visit = new Set();
  // get matrix rows
  const rows = grid.length;
  // get matrix columns 
  const cols = grid[0].length;

  function dfs(r, c) {
    // verify the following statements
    // r < 0: prevent rows out of bounds
    // r >= rows: prevent rows out of bounds
    // c < 0: prevent column out of bounds
    // c >= cols: prevent column out of bounds
    // grid[r][c] === "0": node is not a island
    // visit.has(`${r}-${c}`): node was visited 
    if (
      r < 0 || r >= rows || c < 0 || c >= cols ||
      grid[r][c] === "0" || visit.has(`${r}-${c}`)
    ) {
      return;
    }

    visit.add(`${r}-${c}`);
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (const [dr, dc] of directions) {
      dfs(r + dr, c + dc);
    }
  }
  // declare island quantity variable
  let islands = 0;

  // iterate in each row
  for (let r = 0; r < rows; r++) {
    // iterate in each column 
    for (let c = 0; c < cols; c++) {
      // if the node is a island (1) and is not visited yet add a new island and do the dfs
      if (grid[r][c] === "1" && !visit.has(`${r}-${c}`)) {
        islands++;
        dfs(r, c);
      }
    }
  }

  return islands;
};