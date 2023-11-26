/**
 * 190. Reverse Bits
 * https://leetcode.com/problems/reverse-bits/
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let bit = 0
  for (let i = 0; i < 32; i++) {
        bit <<= 1;      
        bit |= (n & 1); 
        n >>=  1;           
    }

    return bit >>> 0;
};