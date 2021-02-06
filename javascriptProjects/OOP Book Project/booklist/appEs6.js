class Book {
  constructor(title, author, isbn) {
    this.Book;
    this.author;
    this.isbn;
  }
}

class UI {
  addBookToList(book) {
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

  showAlert(message, className) {

  }

  deleteBook(target) {

  }

  clearFields() {

  }
}