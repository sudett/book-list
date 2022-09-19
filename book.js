class Book {
  static books = [];

  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  static addBook(book) {
    this.books.push(book);
    // console.log(this.books);
  }

  static findBook(isbn) {
    return this.books.find(book => book.isbn === isbn);
  }

  static editBook(targetISBN, book) {
    const {title, author, isbn} = book;

    return this.books.map(book => book.isbn === targetISBN ? {title, author, isbn} : book)
  }

  static deleteBook(isbn) {
    const idx = this.books.findIndex(book => book.isbn === isbn)
    this.books.splice(idx, 1);
    return this.books;
  }

  static isbnValidation(isbn) {
    return this.books.some(book => book.isbn === isbn);
  }

  static set editedItem(isbn) {
    this._isbn = isbn;
  }

  static get editedItem() {
    return this._isbn;
  }
}

export default Book;