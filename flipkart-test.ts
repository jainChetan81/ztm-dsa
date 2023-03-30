// Tree, graph

// Question 1:

// An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.
// Given an array changed, return original if changed is a doubled array. If change is not a doubled array, return an empty array. The elements in original may be returned in any order.

// Example:
// Input: [2,1,2,4,4,8]
// 1,2,2,4,4,7,8,14
// Output: [1,3,4]
// Solution:
// Sorting
// 		 O(nLog(n))
// 		O(n)* O(log(n))

// Map:
//  O(n)
// O(n^2)

// 2,1
// 2,4

// 4,8
// [2,1,4,8,2]

// Org: [1,2,3] :[]

// Input: Doubled Arr:  [1,2,4,3,6]
// Output: Org
// Not possible []
// Org: []

// Doubled: [1,2,2,4,3,6]

// Org: [1,2,3]

// Solution:

// Input: [4,2,8,2,4,4]

// [4,1,2,8]

// Code:

// Function findDuplicates(nums:number[]):number[] {
// 	nums.sort((a,b)=>a-b)
// Const result:number[]=[]
// Const set=new Set<number>()
// 	for( i=0;i<nums.length-1;++i){
//             		if(set.has(i))continue;
// 		Const supplementNumber=nums[i]*2
// 		Let left=i+1, right=nums.length-1
// Const duplicate=binarySearch(nums,left,right,supplementNumber)
// if(duplicate===-1)return []
// set.add(duplicate)
// result.push(nums[i])
// 	}
// }

// Function binarySearch(nums:number[],left:number,right:number,k:number):number{
// 	if(right<left)return -1
// 	Const mid=Math.floor((left+right)/2)
// if(nums[mid]===k)Return mid
// }

// Input: [1,2,2,4,4,7,8,14]
// result=[1,2,4,7]
// Set =[1,3,6,7]

// Time Complexity: O(nlogn)
// Space Complexity: O(n)

// Question 2:

// You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.
// Return the minimum size of the set so that at least half of the integers of the array are removed.
// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// stack=[1,3,2,4]
// [1,2,3,3]
// 3

// Output: 2

// Size <= arr.length/2

// Size: 10
// Resultant <=5
// Possible Pairs: {3,5} = 3
// {3,2} = 4

// {5,2} =

//  [3,3,3,3,5,5,5,2,4,7]

// {5,2,4} =
// {3,5}

// Solution:

// Sorting : O(nlogn)

// [1,3,2,4] => 1 -> n
// [ ] -> O(n)

// Time: O(N)

// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// stack=[1,3,2,4]
// [1,2,3,3]

// Function occurrences(nums:number[]):number{
// 	Const map=new Map<number,number>()
// for(0;n-1;++i){
// 		Const value=map.get(nums[i])??0
// map.set(nums[i],value+1)_
// }
// Const freq=[]
// for( const [key,value] of map){
// 	freq.push(value)
// }
// countingSort(freq)
// Let length=nums.length, total=0
// For(n-1; 0 ;i–){
// Const number=stack[i];
// length=length-number
// Total++
// if(length<==nums.length/2)return total
// }
// Return -1
// }
// //****SOLUTION****************************
// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Map {3:4,5:3,2:2,7:1}
// fre=[4,3,2,1]=>[1,2,3,4]
// length=10
// Loop freq
// Length-freq.pop
// total++
// if(length<10/2)

// {3:4,5:4,2:2,7:1}

// countSort[]

// countSort[freq]+=1

// [0,1,2,3,4,5,6,7,8,9,10]

// [0,1 -> [7],2 -> [1] ,3,4 -> [2], 5….]

// N -> n

// x occurrence

// countingSort(Freq)

// TimeComplexity: O(n)

// Space Complexity: O(n)
// map.set(1,1)
// map.set(2,1)
// map.set(3,1)
// map.set(4,1)
// Let a=map.keys()
// a.next()

// 2*n =>

// [ref] ->
