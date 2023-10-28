/**
 * 703. Kth Largest Element in a Stream
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 */

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.minHeap = nums;
  this.k = k;
  this.minHeap = this.minHeap.sort((a, b) => a - b);
  while (this.minHeap.length > k) {
      this.minHeap.shift();
  }
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val)  {
  this.minHeap.push(val);
  this.minHeap = this.minHeap.sort((a, b) => a - b);
      if (this.minHeap.length > this.k) {
          this.minHeap.shift();
      }
   return this.minHeap[0];
  };

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/