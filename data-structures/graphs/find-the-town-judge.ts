// a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
// If the town judge exists, then:
// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.
// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

// Example 1:
// Input: n = 2, trust = [[1,2]]
// Output: 2

// Example 2:
// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3

// Example 3:
// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1
function findJudge(n: number, trust: number[][]): number {
	const map = new Map<number, boolean>();
	const map2 = new Map<number, number>();

	for (let i = 0; i < trust.length; i++) {
		const [p1, p2] = trust[i];
		const count = map2.get(p2) || 0;
		map2.set(p2, count + 1);
		map.set(p1, true);
	}
	let ans = -1;
	for (let i = 1; i <= n; i++) {
		// this is checking if the person trusts anyone
		if (map.has(i)) continue;
		ans = i;
		break;
	}
	if (ans === -1) return ans;
	// check if everyone trusts this person
	// check if
	const count = map2.get(ans) || 0;
	if (count === n - 1) return ans;

	return -1;
}
// console.log(findJudge(2, [[1, 2]])); //2
// console.log(
// 	findJudge(3, [
// 		[1, 3],
// 		[2, 3]
// 	])
// ); //3
// console.log(
// 	findJudge(3, [
// 		[1, 3],
// 		[2, 3],
// 		[3, 1]
// 	])
// ); //-1
console.log(
	findJudge(3, [
		[1, 2],
		[2, 3]
	])
); //-1
