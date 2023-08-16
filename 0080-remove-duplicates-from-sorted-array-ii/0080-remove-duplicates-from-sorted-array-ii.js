/**
 * @param {number[]} nums
 * @return {number}
 */
//sudo code 
// . loop through the array 
// . count the occurence of each elements 
// . 
//. if the elements appear more than one, keep two elements, if not, keep one. 
// . return the length of elements in nums
// . 
var removeDuplicates = function(nums) {
    
     var n = nums.length
     if (n < 2)
         return n
     var lastvalid = 1;
    for( let i = 2; i < n; i++ ) {
        if( nums[i] != nums[lastvalid -1 ] || nums[i] != nums[lastvalid])
            lastvalid++
          nums[lastvalid] = nums[i]
    }
    
    return lastvalid+1

};