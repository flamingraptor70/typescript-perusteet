// TODO: Implement the promptForBook function
function promptForBook() {
    // TODO: Prompt user for book details (title, author, publication year)
    var bookTitle = prompt("Give title");
    var bookAuthor = prompt("Give author");
    var bookPublicationYear = parseInt(prompt("Give year"));
    // TODO: Create an object of type 'Book' with the entered values
    var book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear,
    };
    return book;
}
// TODO: Call the promptForBook function to get the book details
var bookDetails = promptForBook();
// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log("Title: ".concat(bookDetails.title));
console.log("Author: ".concat(bookDetails.author));
console.log("Publication Year: ".concat(bookDetails.publicationYear));
