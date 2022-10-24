const bookList = document.querySelector('.book-list');

function addBook() {
  const div = document.createElement('div');
  div.innerHTML = `
  <p>book title</p>
  <p>author title</p>
  <button class="remove">Remove</button>
  <hr />
  `;
  bookList.append(div);
}

function removeBook() {
}