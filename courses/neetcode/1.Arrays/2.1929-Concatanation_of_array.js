/**
 * 1929 Concatenation of Array
 * https://leetcode.com/problems/concatenation-of-array/
 */

/*
* Problem example: 
* Input: nums = [1,2,1]
* Output: [1,2,1,1,2,1]
* Explanation: The array ans is formed as follows:
* - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
* - ans = [1,2,1,1,2,1]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  const ans = []
  for(let i = 0; i < nums.length; i++) {
    ans[i] = nums[i]
    ans[nums.length + i] = nums[i] 
  }
  return ans
};