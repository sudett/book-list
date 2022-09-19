import Message from "./message.js";
import Book from "./book.js";
import Table from "./table.js";
import Form from './form.js';

// Form submission
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();

  const {title, author, isbn} = Form.getInputs();

  // data validation (form inputs)
  if (!title || !author || !isbn) return Message.showMsg('Please fill all inputs', 'error');

  // isbn validation
  if (Book.isbnValidation(isbn) || isNaN(+isbn)) return Message.showMsg('ISBN should be unique and a number', 'error');

  // edit book
  if (document.querySelector('.btn--submit').textContent === 'Edit') {
    // get edited item
    const targetISBN = Book.editedItem

    // edit book in books arr
    const editedBooks = Book.editBook(targetISBN, {title, author, isbn});

    // render table
    Table.renderTable(editedBooks);

    document.querySelector('.btn--submit').textContent = 'Submit';

    // clear form
    Form.clearForm();
    
    return;
  }

  // create book object
  const book = new Book(title, author, +isbn);

  // add book to the table
  Table.renderRow(book);

  // add book to books array
  Book.addBook(book);

  // clear form
  Form.clearForm();
})

// Edit functionality
document.querySelector('.table__body').addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');

  // exit if target is not edit button
  if (!btn.classList.contains('btn--edit')) return;

  // get unique isbn
  const targetISBN = +btn.parentElement.parentElement.dataset.isbn;

  // set the edited item 
  Book.editedItem = targetISBN;
  
  // find book in the books arr
  const {title, author, isbn} = Book.findBook(targetISBN);

  // fill in form with target book data
  Form.fillForm(title, author, isbn);

  // change button text 
  document.querySelector('.btn--submit').textContent = 'Edit';
})

// DElete functionality 
document.querySelector('.table__body').addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');

  // exit if target is not edit button
  if (!btn.classList.contains('btn--trash')) return;

  // get unique isbn
  const targetISBN = +btn.parentElement.parentElement.dataset.isbn;

  // delete book in books arr
  const newBooks = Book.deleteBook(targetISBN);

  // render table
  Table.renderTable(newBooks);
})