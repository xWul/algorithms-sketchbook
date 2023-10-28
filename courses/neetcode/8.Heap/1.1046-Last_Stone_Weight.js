/**
 * 1046. Last Stone Weight
 * https://leetcode.com/problems/last-stone-weight
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let sortedStones = stones.sort((a, b) => b - a)
    
    while(sortedStones.length > 1) {
        const x = 1
        const y = 0
        if(sortedStones[x] === sortedStones[y]) {
            sortedStones.shift()
            sortedStones.shift()
        } else {
           const yValue = sortedStones.shift()
           const xValue = sortedStones.shift()
           sortedStones.push(yValue - xValue)
           sortedStones = stones.sort((a, b) => b - a)           
        } 
    }

    return sortedStones
};