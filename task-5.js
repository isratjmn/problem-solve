/* 5.Task: Find And Modify

Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array */

const people = [
	{ name: "John", age: 30 },
	{ name: "Alice", age: 28 },
	{ name: "Bob", age: 35 },
	{ name: "Charlie", age: 32 },
	{ name: "David", age: 37 },
];

const findModifyNewAge = (people, name, newAge) => {
	const findPerson = people.find((person) => person.name === name);
	if (findPerson) {
		findPerson.age = newAge;
		console.log(people);
	} else {
		console.log("Person not found.");
	}
};
const updatedPeople = findModifyNewAge(people, "David", 10);
console.log(updatedPeople);
