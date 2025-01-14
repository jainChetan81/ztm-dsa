function fractionalknapsack(val: number[], wt: number[], capacity: number) {
	const items = val.map((v, i) => {
		return { val: v, weight: wt[i], ratio: v / wt[i] };
	});
	items.sort((a, b) => b.ratio - a.ratio);
	console.log(items);

	let tempCapacity = capacity;
	let output = 0;
	for (let i = 0; i < items.length; i++) {
		if (items[i].weight <= tempCapacity) {
			output += items[i].val;
			tempCapacity -= items[i].weight;
		} else {
			output += tempCapacity * items[i].ratio;
		}
		console.log(output, tempCapacity);
	}
	return output;
}
// val[] = [60, 100, 120], wt[] = [10, 20, 30], capacity = 50
// console.log(fractionalknapsack([60, 100, 120], [10, 20, 30], 50)); //240

console.log(fractionalknapsack([1, 5, 7, 2, 7, 10], [4, 9, 6, 3, 7, 3], 24)); //24
