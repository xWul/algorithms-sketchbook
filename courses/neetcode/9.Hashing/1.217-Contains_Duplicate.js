/**
 * 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const numMap = new Map()
  for (let i = 0; i < nums.length; i++) {
      if (numMap.has(nums[i])) {
          return true
      }
      numMap.set(nums[i], true)
  }
  return false
};

