/* 2.Task: Object Manipulation

Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result. */

const books = [
	{ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
	{ title: "1984", author: "George Orwell", year: 1949 },
	{ title: "Animal Farm", author: "Abelard Hughes", year: 1945 },
	{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];
const getBookTitle = (books) => {
	const bookTitles = books.map((book) => book.title);
	return bookTitles;
};

const titles = getBookTitle(books);
console.log(titles);
