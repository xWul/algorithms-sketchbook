/**
 * 133. Clone Graph
 * https://leetcode.com/problems/clone-graph/
 */

 /**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */


var cloneGraph = function(node) {
  const visit = {}

  function dfs(node) {
      if (!node) return node

      if(visit[node.val] != null) return visit[node.val]

      const root = new Node(node.val)
      visit[node.val] = root

      node.neighbors.forEach((n) => {
        root.neighbors.push(dfs(n))
      })
      return root
  }

  return dfs(node);
};

