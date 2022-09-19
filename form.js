class Form {
  #titleEl = document.querySelector('.form__title');
  #authorEl = document.querySelector('.form__author');
  #isbnEl = document.querySelector('.form__isbn');

  getInputs() {
    const title = this.#titleEl.value.trim();
    const author = this.#authorEl.value.trim();
    const isbn = this.#isbnEl.value.trim();

    return {
      title,
      author,
      isbn
    }
  }

  clearForm() {
    this.#titleEl.value = '';
    this.#authorEl.value = '';
    this.#isbnEl.value = '';
  }

  fillForm(title, author, isbn) {
    this.#titleEl.value = title;
    this.#authorEl.value = author;
    this.#isbnEl.value = isbn;
  }
}

export default new Form();