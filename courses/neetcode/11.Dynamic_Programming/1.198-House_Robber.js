/**
 * 198. House Robber
 * https://leetcode.com/problems/house-robber
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var rob1 = 0, rob2 = 0
      for (n of nums) {
            temp = Math.max(n + rob1, rob2)
            rob1 = rob2
            rob2 = temp
      }

      return rob2

};