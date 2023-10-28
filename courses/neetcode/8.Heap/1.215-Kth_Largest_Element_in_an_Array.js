/**
 * 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
  const minHeap = new MinPriorityQueue()

  for (const num of nums) {
      minHeap.enqueue(num);

      const isAtCapacity = k < minHeap.size();
      if (isAtCapacity) minHeap.dequeue();
  }

  return minHeap.front().element
}