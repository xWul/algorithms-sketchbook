/**
 * 707. Design Linked List
 * https://leetcode.com/problems/design-linked-list/description/
 */

var ListNode = function (val) {
    this.val = val
    this.next = null
}

var MyLinkedList = function () {
    this.head = null
    this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }
    let curr = this.head
    let i = 0
    while (i <= index && curr) {
        if (i === index) {
            return curr.val
        }
        i++
        curr = curr.next
    }

    return null
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new ListNode(val)
    if (!this.head) {
        this.head = newNode
    } else {
        const prev = this.head
        this.head = newNode
        this.head.next = prev
    }
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new ListNode(val)
    if (!this.head) {
        this.head = newNode
    } else {
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }
    this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) {
        return;
    }
    if (index === 0) {
        this.addAtHead(val);
    } else {
        let curr = this.head
        let i = 0
        while (i < index - 1 && curr) {
            i++
            curr = curr.next
        }

        if (curr) {
            const newNode = new ListNode(val)
            newNode.next = curr.next
            curr.next = newNode
        }
    }
    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) {
        return;
    }

    if (index === 0) {
        this.head = this.head.next;
    } else {
        let curr = this.head
        let i = 0

        while (i < index - 1 && curr !== null) {
            curr = curr.next
            i++
        }

        if (curr !== null) {
            curr.next = curr.next.next
        }
    }
    this.size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */