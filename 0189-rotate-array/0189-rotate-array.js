/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// sudo code 
// I use a while loop with k count k>=0
// at each iteration, I take the element at last index and put it at the front using unshift(element)
// return the array after the while loop
var rotate = function(nums, k) {
   k = k % nums.length;
  nums.unshift(...nums.splice(-k));
  return nums;

};