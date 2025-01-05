function maxProfit(prices: number[]): number {
  let prev = prices[0];
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    res = Math.max(res, res + prices[i] - prev);
    prev = prices[i];
  }
  return res;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //7
console.log(maxProfit([1, 2, 3, 4, 5])); //4
