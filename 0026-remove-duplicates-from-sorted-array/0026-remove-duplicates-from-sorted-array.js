/**
 * @param {number[]} nums
 * @return {number}
 */
// lets get the length of array numns call it j 
// while loop with j>=nums.length condition 
// add each number in the nums with condition, if it exist, don't add, if not push it.
// return the length of final nums.length

var removeDuplicates = function(nums) {
    let k = 0;
   for( let i = 1; i< nums.length; i++)    
       if(nums.indexOf(nums[i]) === i) {
           k++;
           nums[k] = nums[i]
       }
      return k+1
};