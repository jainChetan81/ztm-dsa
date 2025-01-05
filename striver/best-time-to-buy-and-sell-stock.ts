function maxProfit(prices: number[]): number {
  let low = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    low = Math.min(prices[i], low);
    max = Math.max(max, prices[i] - low);
  }
  return max;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
