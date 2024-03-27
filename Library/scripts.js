const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// function 
document.getElementById('myForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting.
  event.preventDefault(); 
  // Creating the new book object.
  let book = new Book();
  book.title = document.querySelector('#book-title').value;
  book.author = document.querySelector('#book-author').value;
  book.pages = document.querySelector('#pages').value;
  book.read = document.querySelector('#book-status').checked;
  // Adding the new book to the library.
  myLibrary.push(book);
  renderLibrary();
  document.getElementById('myForm').reset();
});

function renderLibrary(){
  bookRack = document.querySelector(".book-rack")
  bookRack.innerHTML = ""
  for (let i = 0; i < myLibrary.length; i++) {
    book = myLibrary[i];

    // Creating the paragraph element to display books
    paragraph = document.createElement("p");
    paragraph.innerText = `${book.title}, ${book.author}, ${book.pages}`;

    // Creating the check box, to show  
    checkBox = document.createElement("span");
    checkBox.innerHTML = book.read ? `<input type="checkbox" id="book-status" name="book-status" checked >`: `<input type="checkbox" id="book-status" name="book-status">`;
    
    // appending paragraph to bookRack
    paragraph.appendChild(checkBox);
    bookRack.appendChild(paragraph);
  }
}