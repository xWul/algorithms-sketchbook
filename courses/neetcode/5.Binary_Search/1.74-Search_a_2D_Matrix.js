/**
 * 74. Search a 2D Matrix
 * https://leetcode.com/problems/search-a-2d-matrix/description/
 */

/*

    First solution but not O(log(m * n))
    for(let i = 0; i < matrix.length; i++) {
        let start = 0
        let end = matrix[i].length - 1
        while(start <= end) {
            let mid = Math.floor((start + end) / 2)
            if (target === matrix[i][mid]) return true
            if (target > matrix[i][mid]) {
                start = mid + 1
            } else if (target < matrix[i][mid]) {
                end = mid - 1
            }
        }
    }

    return false
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let ROWS = matrix.length
  let COLS = matrix[0].length
  let top = 0, bot = ROWS - 1
  while(top <= bot) {
      let row = Math.floor((top + bot) / 2)
      if (target > matrix[row][matrix[row].length - 1]) {
          top = row + 1
      } else if (target < matrix[row][0]) {
          bot = row - 1
      } else {
          break;
      }
  }

  if (!(top <= bot)) 
      return false
  
  row = Math.floor((top+bot) / 2)
  let start = 0
  let end = COLS - 1
  while(start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (target > matrix[row][mid]) {
        start = mid + 1
    } else if (target < matrix[row][mid]) {
        end = mid - 1
    } else {
        return true
    }
  }
  return false
}