// Given the array orders, which represents the orders that customers have done in a restaurant. More specifically orders[i]=[customerName,tableNumber,foodItem] where customerName is the name of the customer, tableNumber is the table customer sit at, and foodItem is the item customer orders.

// Return the restaurant's “display table”. The “display table” is a table whose row entries denote how many of each food item each table ordered. The first column is the table number and the remaining columns correspond to each food item in alphabetical order. The first row should be a header whose first column is “Table”, followed by the names of the food items. Note that the customer names are not part of the table. Additionally, the rows should be sorted in numerically increasing order.

// Example 1:
// Input: orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]
// Output: [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]]
// Explanation:
// The displaying table looks like:
// Table,Beef Burrito,Ceviche,Fried Chicken,Water
// 3    ,0           ,2      ,1            ,0
// 5    ,0           ,1      ,0            ,1
// 10   ,1           ,0      ,0            ,0
// For the table 3: David orders "Ceviche" and "Fried Chicken", and Rous orders "Ceviche".
// For the table 5: Carla orders "Water" and "Ceviche".
// For the table 10: Corina orders "Beef Burrito".

// Example 2:
// Input: orders = [["James","12","Fried Chicken"],["Ratesh","12","Fried Chicken"],["Amadeus","12","Fried Chicken"],["Adam","1","Canadian Waffles"],["Brianna","1","Canadian Waffles"]]
// Output: [["Table","Canadian Waffles","Fried Chicken"],["1","2","0"],["12","0","3"]]
// Explanation:
// For the table 1: Adam and Brianna order "Canadian Waffles".
// For the table 12: James, Ratesh and Amadeus order "Fried Chicken".

// Example 3:
// Input: orders = [["Laura","2","Bean Burrito"],["Jhon","2","Beef Burrito"],["Melissa","2","Soda"]]
// Output: [["Table","Bean Burrito","Beef Burrito","Soda"],["2","1","1","1"]]

// Constraints:

//     1 <= orders.length <= 5 * 10^4
//     orders[i].length == 3
//     1 <= customerName.length, foodItem.length <= 20
//     customerName and foodItem consist of lowercase and uppercase English letters and the space character.
//     tableNumber is a valid integer between 1 and 500.
function displayTable(orders: string[][]): string[][] {
	// first sort table in increasing order by the table Number
	const tableMap = new Map<number, Map<string, number>>();
	const foodNames = new Set<string>();
	for (let i = 0; i < orders.length; i++) {
		const [_customerName, tableNumber, foodItem] = orders[i];
		foodNames.add(foodItem);
		const currentTable = tableMap.get(parseInt(tableNumber)) || new Map<string, number>();
		const currentDishOrders = currentTable.get(foodItem) || 0;
		currentTable.set(foodItem, currentDishOrders + 1);
		tableMap.set(parseInt(tableNumber), currentTable);
	}

	const table: string[][] = [];

	const firstRow: string[] = ["Table", ...Array.from(foodNames).sort()];
	// loop over the tableMap and create the table
	table.push(firstRow);
	Array.from(tableMap.keys())
		.sort((a, b) => a - b)
		.forEach((tableNumber, index) => {
			const currentTable = tableMap.get(tableNumber)!;
			// firstRow.push);
			const currentRow: string[] = [tableNumber.toString()];
			for (let i = 1; i < firstRow.length; i++) {
				const currentDishOrders = currentTable.get(firstRow[i]) || 0;
				currentRow.push(currentDishOrders.toString());
			}

			table[index + 1] = currentRow;
		});
	return table;
}

// example 1
console.log(
	displayTable([
		["David", "3", "Ceviche"],
		["Corina", "10", "Beef Burrito"],
		["David", "3", "Fried Chicken"],
		["Carla", "5", "Water"],
		["Carla", "5", "Ceviche"],
		["Rous", "3", "Ceviche"],
	])
);
// Output: [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]]

// example 2
// console.log(
// 	displayTable([
// 		["James", "12", "Fried Chicken"],
// 		["Ratesh", "12", "Fried Chicken"],
// 		["Amadeus", "12", "Fried Chicken"],
// 		["Adam", "1", "Canadian Waffles"],
// 		["Brianna", "1", "Canadian Waffles"],
// 	])
// );
// Output: [["Table","Canadian Waffles","Fried Chicken"],["1","2","0"],["12","0","3"]]

// example 3\
// console.log(
// displayTable([
// 	["Laura", "2", "Bean Burrito"],
// 	["Jhon", "2", "Beef Burrito"],
// 	["Melissa", "2", "Soda"],
// ])
// );
// Output: [["Table","Bean Burrito","Beef Burrito","Soda"],["2","1","1","1"]]
