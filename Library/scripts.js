const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.readToggle = function(object) {
  object.read = !this.read;
}
// function 
document.querySelector('#myForm').addEventListener('submit', event => {

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

    // Clear the form fields after adding the book the librar 
    document.getElementById('myForm').reset();
});

// Event listner to change read status for the book status if changed in library
bookStatusArray = [...document.querySelectorAll("#book-status-library")]
bookStatusArray.map(bookStatus => {bookStatus.addEventListener('change', () => {
  console.log(this.checked)
});
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
      let checkStatus = ""
      checkStatus = book.read ? "checked": "";
      checkBox = document.createElement("span");
      checkBox.innerHTML = `<input type="checkbox" id="book-status-library" name="book-status-library" ${checkStatus} >`

      // appending paragraph to bookRack
      paragraph.appendChild(checkBox);
      bookRack.appendChild(paragraph);
  }
}



