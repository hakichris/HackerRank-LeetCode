# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
#sudo code 
# first find elements that are in val but not include in nums
# we can use a loop or while and compare the elements , if it is equal to val number remove it from nums.
# then count the number left in nums. 
# return that number. 

def remove_element(nums, val)
    for i in nums do 
         if i === val
             nums.delete(i)
         end 
     end 
    k = nums.length
    puts k
 end