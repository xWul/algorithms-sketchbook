/**
 * 1472. Design Browser History
 * https://leetcode.com/problems/design-browser-history/description/
 */

var ListNode = function(val, prev = null, next = null) {
  this.val = val
  this.next = next
  this.prev = prev
}

/**
* @param {string} homepage
*/
var BrowserHistory = function(homepage) {
  this.curr = new ListNode(homepage)
};

/** 
* @param {string} url
* @return {void}
*/
BrowserHistory.prototype.visit = function(url) {
  this.curr.next = new ListNode(url, this.curr)
  this.curr = this.curr.next
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.back = function(steps) {
  while (this.curr.prev && steps > 0) {
      this.curr = this.curr.prev
      steps -= 1
  }
  return this.curr.val
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function(steps) {
  while (this.curr.next && steps > 0) {
      this.curr = this.curr.next
      steps -= 1
  }
  return this.curr.val
};

/** 
* Your BrowserHistory object will be instantiated and called as such:
* var obj = new BrowserHistory(homepage)
* obj.visit(url)
* var param_2 = obj.back(steps)
* var param_3 = obj.forward(steps)
*/