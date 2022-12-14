// Implement Pow(x,n) | X raised to the power N
// Problem Statement: Given a double x and integer n, calculate x raised to power n. Basically Implement pow(x, n).
// Examples:
// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Explanation: You need to calculate 2.00000 raised to 10 which gives ans 1024.00000
// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100
// Explanation: You need to calculate 2.10000 raised to 3 which gives ans 9.26100

package main

import "fmt"

func main() {

	fmt.Println(myPow(2.00000, 10))
	fmt.Println(myPow(2.10000, 3))
}

func myPow(x float64, n int) float64 {
	if n == 0 {
		return 1
	}
	if n < 0 {
		return 1 / myPow(x, -n)
	}
	if n%2 == 0 {
		return myPow(x*x, n/2)
	}
	return x * myPow(x*x, n/2)

}
