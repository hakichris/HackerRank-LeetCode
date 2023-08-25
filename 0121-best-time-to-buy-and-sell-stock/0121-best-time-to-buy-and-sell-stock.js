/**
 * @param {number[]} prices
 * @return {number}
 */ 
//sudo code 
// let maxprofit = 0
// let make minnumber = the infinity, in first place
// let loop through the array starting at zero 
// first condition, to compare the number greater than infinity, if it is less we assing minnumber to the number at the index, 
// another condition,else condition, new min - current min > maxprofit
// return the updated maxprofit after the loop
var maxProfit = function(prices) {
   let maxprofit = 0;
    let minprices = Infinity 
    for(let i = 0; i< prices.length; i++){
        if(prices[i] < minprices)
            minprices = prices[i]
        else if (prices[i] - minprices > maxprofit)
            maxprofit = prices[i] - minprices
    }
    return maxprofit
};