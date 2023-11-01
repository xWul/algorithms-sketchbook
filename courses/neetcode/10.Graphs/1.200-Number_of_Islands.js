/**
 * 200. Number of Islands
 * https://leetcode.com/problems/number-of-islands/
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
   if (!grid || grid.length === 0 || grid[0].length === 0) {
            return 0;
        }

        const visit = new Set();
        const rows = grid.length;
        const cols = grid[0].length;

        function dfs(r, c) {
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

        let islands = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === "1" && !visit.has(`${r}-${c}`)) {
                    islands++;
                    dfs(r, c);
                }
            }
        }

        return islands;
};