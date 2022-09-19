class Table {
  #parentEl = document.querySelector('.table__body');

  createRowMarkup(book) {
    const {title, author, isbn} = book;

    return `
      <tr data-isbn=${isbn}>
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td>
          <button class="btn btn--trash">
            <i class="trash-icon fa-solid fa-trash"></i>
          </button>
          <button class="btn btn--edit">
            <i class="edit-icon fa-solid fa-pen"></i>
          </button>
        </td>
      </tr>
    `;
  }

  renderRow(book) {
    this.#parentEl.insertAdjacentHTML('beforeend', this.createRowMarkup(book));
  }

  renderTable(books) {
    this.#parentEl.innerHTML = '';
    
    this.#parentEl.insertAdjacentHTML('beforeend', books.map(book => this.createRowMarkup(book)).join(''));
  }
}

export default new Table();