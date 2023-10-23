/**
 * 450. Delete Node in a BST
 * https://leetcode.com/problems/delete-node-in-a-bst/description/
 */

 /**
  Definition for a binary tree node. */
function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

var minNodeValue = function(root) {
    curr = root
    while(curr && curr.left) {
        curr = curr.left
    }

    return curr
}

var deleteNode = function(root, key) {
    if (root == null) return null
    if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else {
        if (root.left === null) {
            return root.right
        } else if (root.right === null) {
            return root.left
        } else {
            const minValue = minNodeValue(root.right)
            root.val = minValue.val
            root.right = deleteNode(root.right, minValue.val)
        }
    }

    return root
};