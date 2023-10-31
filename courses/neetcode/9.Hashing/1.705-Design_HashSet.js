/**
 * 705. Design HashSet
 * https://leetcode.com/problems/design-hashset/
 */

var MyHashSet = function() {
    this.mySet = []
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const index = this.mySet.indexOf(key)
    if (index === -1) {
        this.mySet.push(key)
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const index = this.mySet.indexOf(key)
    if (index !== -1) {
        this.mySet.splice(index, 1)
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.mySet.indexOf(key) !== -1
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */