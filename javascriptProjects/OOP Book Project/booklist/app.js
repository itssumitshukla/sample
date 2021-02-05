// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//UI Constructor
function UI() {
  
};

//Add book to List
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  //create tr element
  const row = document.createElement('tr');
 //Insert Cols
 row.innerHTML = `
 <td>${book.title}</td>
 <td>${book.author}</td>
 <td>${book.isbn}</td>
 <td><a href="#" class = "delete">X</a></td>
 `;

 list.appendChild(row);
}

// Event Listners
document.getElementById('book-form').addEventListener('submit', function (e) {
  //Get form values
  let title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value;
      
      //Instantiate book
      const book = new Book(title,author,isbn);

      //Instantiate UI
      const ui = new UI();
      
      //Add book to list
      ui.addBookToList(book);
  e.preventDefault();
})