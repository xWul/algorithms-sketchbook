/**
 * 1470 Shuffle the Array
 * https://leetcode.com/problems/shuffle-the-array/
 */

/*
* Problem example: 
* Input: nums = [1,2,3,4,4,3,2,1], n = 4
* Output: [1,4,2,3,3,2,4,1]
*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const tempArray = []
    for(let i = 0; i < n; i++) {
      tempArray.push(nums[i])
      tempArray.push(nums[i+n])
    }
    return tempArray
};
