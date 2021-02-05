// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//UI Constructor
function UI() {
  
};

// Event Listners
document.getElementById('book-form').addEventListener('submit', function (e) {
  //Get form values
  let title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value;
      
      //Instantiate book
      const book = new Book(title,author,isbn);

      console.log(book)
  e.preventDefault();
})