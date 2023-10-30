/**
 * 146. LRU Cache
 * https://leetcode.com/problems/lru-cache/
 */

/**
 * TODO: Solve it using a linked list
 */

 /**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.keys = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        this.updateKeyOrder(key)
        return this.cache.get(key)
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {   
   if (this.cache.has(key)) {
      this.cache.set(key, value)
      this.updateKeyOrder(key)
    } else {
      if (this.keys.length >= this.capacity) {
        const lruKey = this.keys.shift()
        this.cache.delete(lruKey)
      }
      this.cache.set(key, value)
      this.keys.push(key);
    }
};


LRUCache.prototype.updateKeyOrder = function(key) {
  const index = this.keys.indexOf(key);
  if (index !== -1) {
    this.keys.splice(index, 1);
  }
  this.keys.push(key);
}


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */