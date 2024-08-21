const myLibrary = [];

function Book(author, title, pages, status = false) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary (event) {

    const bookShelf = document.querySelector ("#book-shelf");
    bookShelf.innerHTML  = "";
    
    myLibrary.push (new Book (
        document.querySelector ("#title").value,
        document.querySelector ("#author").value,
        document.querySelector ("#pages").value
    ));

    for (let i = 0; i < myLibrary.length; i++) {
        
        bookShelf.innerHTML += `    
        <div class="book" style="border: 1px solid blue;">
            <h2>${myLibrary[i].title}</h2>
            <p>${myLibrary[i].author}</p>
            <p>${myLibrary[i].pages}</p>
        </div>
        `

    }

    event.preventDefault();
}



document.querySelector ("#add-book").addEventListener ("click", addBookToLibrary);




