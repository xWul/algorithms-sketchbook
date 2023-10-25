/**
 * 199. Binary Tree Right Side View
 * https://leetcode.com/problems/binary-tree-right-side-view/submissions/
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  const queue = []
  const list = []
  if (root) {
    queue.push(root)
  }
 
  while(queue.length > 0) {
    let rightSide = null
    const levelSize = queue.length
    
    for(let i = 0; i < levelSize; i++) {
      const curr = queue.shift()
      if (curr) {
        rightSide = curr
        queue.push(curr.left)
        queue.push(curr.right)
      }
    }

    if (rightSide) {
      list.push(rightSide.val)
    }
  }

  return list
};