// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.
// Examples 1:
// Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Explanation: Since matrix[2][2]=0.Therefore the 2nd column and 2nd row wil be set to 0.
// Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
// Explanation:Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0
package main

import "fmt"

func main() {
	// declare a 2d array
	matrix1 := [][]int{{1, 1, 1}, {1, 0, 1}, {1, 1, 1}}
	matrix2 := [][]int{{0, 1, 2, 0}, {3, 4, 5, 2}, {1, 3, 1, 5}}
	// call the function
	fmt.Println(setZeroesBruteForce(matrix1))
	fmt.Println(setZeroesBruteForce(matrix2))
	// fmt.Println(setZeroes(matrix2))
	// fmt.Println(setZeroes(matrix2))

}

// setZeroesBruteForce function
func setZeroesBruteForce(nums [][]int) [][]int {
	mapRow := make(map[int]bool)
	mapCol := make(map[int]bool)
	for i := 0; i < len(nums); i++ {
		for j := 0; j < len(nums[i]); j++ {
			if nums[i][j] == 0 {
				mapRow[i] = true
				mapCol[j] = true
			}
		}
	}
	for i := 0; i < len(nums); i++ {
		for j := 0; j < len(nums[i]); j++ {
			if mapRow[i] || mapCol[j] {
				nums[i][j] = 0
			}
		}
	}
	return nums
}
