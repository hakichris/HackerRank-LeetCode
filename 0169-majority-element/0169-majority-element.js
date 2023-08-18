/**
 * @param {number[]} nums
 * @return {number}
 */
// sudo code 
// we loop through the array for first time 
// then we loop again for second time but this time we are checking the occurence of each elements in the array 
// we compare the occurence, the highest occurence become the answer
var majorityElement = function(nums) {
      let newArray ={};
    for (let n of nums){
        if( n in newArray)
            newArray[n] += 1 
         else
             newArray[n] = 1
        }
     var values = Object.values(newArray);
     var number = Math.max(...values);
    for(let key in newArray){
        if(newArray[key] === number)
            return key
    }
    
};