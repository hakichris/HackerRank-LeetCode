/**
 * @param {number[]} nums
 * @return {boolean}
 */
// sudo code 
// get the destination index = last index, 
// return false if the number is greater than destination or zero.
// 
var canJump = function(nums) {
    let maxReach = 0; // Initialize the maximum reachable index

  for (let i = 0; i < nums.length; i++) {
    // If the current index is beyond the maximum reachable index, return false
    if (i > maxReach) {
      return false;
    }

    // Update the maximum reachable index
    maxReach = Math.max(maxReach, i + nums[i]);

    // If the maximum reachable index is greater than or equal to the last index, return true
    if (maxReach >= nums.length - 1) {
      return true;
    }
  }
}