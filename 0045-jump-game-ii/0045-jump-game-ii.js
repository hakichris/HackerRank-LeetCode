/**
 * @param {number[]} nums
 * @return {number}
 */
//sudo code 
 
 // initiate maxreach which is the last number 
// initiate minjump = 0;
// loop through the array 
// return 0 is current value is greater than maxreach
// else maxreach = maximum between current max, maxnumb at the current iteration
// return true if maxreach = to number at index,
function jump(nums) {
  const n = nums.length;
  let jumps = 0; // Count of jumps
  let farthest = 0; // Farthest index that can be reached
  let currentEnd = 0; // Current end of the interval

  for (let i = 0; i < n - 1; i++) {
    // Update the farthest index that can be reached from the current interval
    farthest = Math.max(farthest, i + nums[i]);

    // If we've reached the end of the current interval, we need to jump to the farthest index
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;

      // If we've reached the last index, no need to continue
      if (currentEnd >= n - 1) {
        break;
      }
    }
  }

  return jumps;
}
