/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/*
* Problem example: 
* Input: nums = [0,0,1,1,1,2,2,3,3,4]
* Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
*/

var removeDuplicates = function(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
   if (nums[i] === nums[i - 1]) {
     nums.splice(i, 1)
   }
  }
};