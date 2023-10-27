/**
 * 39. Combination Sum
 * https://leetcode.com/problems/combination-sum
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []

    function dfs(i, curr, total) {  
        if (total == target){
            result.push([...curr])
            return;
        }
        
        if (i >= candidates.length || total > target) {
            return 
        }

        curr.push(candidates[i])
        dfs(i, curr, total + candidates[i])
        curr.pop()
        dfs(i + 1, curr, total)
    }

    dfs(0, [], 0)
    return result
};