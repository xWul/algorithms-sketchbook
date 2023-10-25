/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description//
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
   const queue = []
   const list = []
    if (root) {
        queue.push(root)
    }
    
    let level = 0
    while(queue.length > 0) {
        const queueLevel = queue.length
        for(let i = 0; i < queueLevel; i++) {
            const curr = queue.shift()
            if (!list[level]) list[level] = []
            list[level].push(curr.val)
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        level += 1
    }
   return list
};