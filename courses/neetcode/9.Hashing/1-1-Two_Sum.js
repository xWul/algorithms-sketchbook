/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        numMap.set(nums[i], i)
    }

    for (let k = 0; k < nums.length; k++) {
        const rest = target - nums[k]
        if (numMap.has(rest) && numMap.get(rest) !== k) {
            return [k, numMap.get(rest)]
        }        
    }
};