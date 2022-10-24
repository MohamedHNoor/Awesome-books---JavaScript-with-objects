const bookList = document.querySelector('.book-list');

const books = [];

function book(title, author) {
  this.title = title;
  this.author = author;
}

function addBook(title, author) {
  const newBook = new book(title, author);
  books.push(newBook);
}

function removeBook(title, author) {
  books = books.filter(book => book['title'] !== title || book['author'] !== author);
}

const form = document.querySelector('.book-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const title = form.elements[0].value;
  const author = form.elements[1].value;
  addBook(title, author);
  document.querySelector('.book-list').innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    const h2 = document.createElement('h2');
    const h2Text = document.createTextNode(`${books[i]['title']}`);
    h2.appendChild(h2Text);
    bookList.appendChild(h2);
    const h3 = document.createElement('h3');
    const h3Text = document.createTextNode(`${books[i]['author']}`);
    h3.appendChild(h3Text);
    bookList.appendChild(h3);
    const button = document.createElement('button');
    const buttonText = document.createTextNode('Remove');
    button.appendChild(buttonText);
    bookList.appendChild(button);
    const hr = document.createElement('hr');
    bookList.appendChild(hr);
  }
});

