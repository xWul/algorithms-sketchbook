
/**
 * 509. Fibonacci Number
 * https://leetcode.com/problems/fibonacci-number/
*/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
};


/**
 * @param {number} n
 * @return {number}
 */
/** OPTIMIZED */

var fib = function(n) {
let a = 0, b = 1, c = n;
  
  for(let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  
  return c;
}
