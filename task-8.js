/* 8. Task: Unique Values

Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.
 */

const numbers = [
	1, 2, 3, 49, 4, 4, 5, 67, 67, 70, 75, 80, 48, 77, 36, 84, 84, 92, 92, 92,
];
const uniqueValues = (numbers) => {
	return [...new Set(numbers)];
};

const uniqueNumbers = uniqueValues(numbers);
console.log(uniqueNumbers);
