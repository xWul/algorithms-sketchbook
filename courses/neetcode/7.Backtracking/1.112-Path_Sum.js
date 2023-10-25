/**
 * 112. Path Sum
 * https://leetcode.com/problems/path-sum/description/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (root === null){
      return false 
  } 
  
  targetSum = targetSum - root.val

  if (root.left === null && root.right === null && targetSum === 0){ 
      return true
  }

  if (hasPathSum(root.left, targetSum)) {
      return true 
  }

  if (hasPathSum(root.right, targetSum)) {
      return true 
  }

  return false 
};