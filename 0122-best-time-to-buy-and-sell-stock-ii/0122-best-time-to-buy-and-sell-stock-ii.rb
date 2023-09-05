# @param {Integer[]} prices
# @return {Integer}
#sudo code 
# create a maxprofit array 
#create a variable to hold the minprice starting with infinity
# 
def max_profit(prices)
    maxprofit = 0 
    (1...prices.length).each do |i|
        if (prices[i] > prices[i -1])
            maxprofit += prices[i] - prices[i -1]
        end 
    end 
    maxprofit 
end 




