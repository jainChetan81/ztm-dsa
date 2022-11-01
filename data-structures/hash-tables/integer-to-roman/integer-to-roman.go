// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//     I can be placed before V (5) and X (10) to make 4 and 9.
//     X can be placed before L (50) and C (100) to make 40 and 90.
//     C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.
// Example 1:
// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:
// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

package main

import "fmt"

func main() {
	fmt.Println(intToRoman(3))
	fmt.Println(intToRoman(58))
	fmt.Println(intToRoman(1994))
}

func intToRoman(num int) string {
	if num == 0 {
		return ""
	}
	mutNum := num
	roman := ""
	for mutNum >= 1000 {
		roman += "M"
		mutNum = mutNum - 1000
	}

	if mutNum >= 900 {
		roman += "CM"
		mutNum = mutNum - 900
	}

	for mutNum >= 500 {
		roman += "D"
		mutNum = mutNum - 500
	}

	if mutNum >= 400 {
		roman += "CD"
		mutNum = mutNum - 400
	}

	for mutNum >= 100 {
		roman += "C"
		mutNum = mutNum - 100
	}

	if mutNum >= 90 {
		roman += "XC"
		mutNum = mutNum - 90
	}

	for mutNum >= 50 {
		roman += "L"
		mutNum = mutNum - 50
	}

	if mutNum >= 40 {
		roman += "XL"
		mutNum = mutNum - 40
	}

	for mutNum >= 10 {
		roman += "X"
		mutNum = mutNum - 10
	}

	if mutNum >= 9 {
		roman += "IX"
		mutNum = mutNum - 9
	}

	for mutNum >= 5 {
		roman += "V"
		mutNum = mutNum - 5
	}

	if mutNum >= 4 {
		roman += "IV"
		mutNum = mutNum - 4

	}

	for mutNum >= 1 {
		roman += "I"
		mutNum = mutNum - 1
	}

	return roman
}

// func intToRoman(num int) string {
// 	roman := []string{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"}
// 	value := []int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}

// 	result := ""

// 	for i := 0; i < len(roman); i++ {
// 		for num >= value[i] {
// 			num = num - value[i]
// 			result = result + roman[i]
// 		}
// 	}

// 	return result
// }
