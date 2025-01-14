function coinChange(coins: number[], amt: number) {
	const dp = Array(amt + 1).fill(Infinity);
	dp[0] = 0;
	for (let i = 1; i <= amt; i++) {
		for (const coin of coins) {
			if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
		}
	}
	return dp[amt] === Infinity ? -1 : dp[amt];
}
console.log(coinChange([186, 419, 83, 408], 6249)); //20
console.log(coinChange([9, 6, 5, 1], 19)); //
