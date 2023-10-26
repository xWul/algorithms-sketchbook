/**
 * 78. Subsets
 * https://leetcode.com/problems/subsets/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = []
    const subset = []

    function dfs(i) {
        if (i >= nums.length) {
            res.push([...subset])
            return 
        }
        
        subset.push(nums[i])
        dfs(i + 1)

        subset.pop()
        dfs(i + 1)
    }   

    dfs(0)
    return res

};