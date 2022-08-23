/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const containsDuplicate = function(nums){
    /* There's two ways to solve this problem, without using Set structure and with it */
    const table = {}
     let duplicated = false
     
     for (let x = 0; x < nums.length; x++) {
         if (table[nums[x]]) {
            duplicated = true
         } else {
             table[nums[x]] = true
         }      
     }
      
     
    return duplicated
      
   //const arrSet = new Set([...nums])
   //return arrSet.size !== nums.length    
  };
  