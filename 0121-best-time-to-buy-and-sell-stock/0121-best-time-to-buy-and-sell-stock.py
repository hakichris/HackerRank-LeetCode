class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxprofit = 0
        minprice = float('inf')
        for price in prices:
            if price < minprice:
                minprice = price
            elif price - minprice > maxprofit:
                maxprofit = price - minprice
        return maxprofit
            
        