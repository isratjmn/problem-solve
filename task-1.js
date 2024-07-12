// 1.Task: Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const people = [
	{ name: "Alice", age: 25, gender: "female" },
	{ name: "Bob", age: 30, gender: "male" },
	{ name: "William", age: 28, gender: "male" },
	{ name: "David", age: 35, gender: "male" },
	{ name: "Eve", age: 22, gender: "female" },
];

const getMaleNames = (people) => {
	// Filter Out Females
	const males = people.filter((person) => person.gender === "male");

	// Map The Remaining People To An Array Of Names
	return males.map((male) => male.name);
};

const maleNames = getMaleNames(people);

console.log(maleNames);
