/**
 * 682. Baseball Game
 * https://leetcode.com/problems/baseball-game/
 */

/*
* Problem example: 
* Input: ops = ["5","2","C","D","+"]
* Output: 30
*/

/**
 * @param {string[]} operations
 * @return {number}
 */

 /**
 * Input: ops = ["5","2","C","D","+"]
 * C = Invalidate the previous score
 * D = Record a new score that is the double of the previous score.
 * + = Record a new score that is the sum of the previous two scores.
 * Output: 30
 * "5" - Add 5 to the record, record is now [5].
 * "2" - Add 2 to the record, record is now [5, 2].
 * "C" - Invalidate and remove the previous score, record is now [5].
 * "D" - Add 2 * 5 = 10 to the record, record is now [5, 10]. 
 * "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
 * The total sum is 5 + 10 + 15 = 30.
 */
 var calPoints = function(operations) {
  const result = []
  for(let i = 0; i < operations.length; i++) {
      if (operations[i] === '+') {
          result.push(Number(result[result.length - 1] + result[result.length - 2]))
      } else if (operations[i] === 'D') {
          result.push(Number(result[result.length - 1] * 2))
      } else if (operations[i] === 'C') { 
          result.pop()
      } else {
          result.push(Number(operations[i]))
      }
  }

  let sum = 0
  for (let i = 0; i < result.length; i++) {
      sum = sum + result[i]
  }

  return sum
};