export default class Pagination {
  constructor(perPage) {
    this.perPage = 20;

    this.paginationContainer = document.querySelector('.pagination');
    this.paginationNumbers = {
      previousPageArrow: document.querySelector('#previous-page-arrow'),
      previousPagesDotted: document.querySelector('#previous-pages-dotted'),
      numOne: document.querySelector('#internal-num-one'),
      numTwo: document.querySelector('#internal-num-two'),
      numThree: document.querySelector('#internal-num-three'),
      numFour: document.querySelector('#internal-num-four'),
      numFive: document.querySelector('#internal-num-five'),
      nextPagesDotted: document.querySelector('#next-pages-dotted'),
      lastPage: document.querySelector('#last-page'),
      nextPageArrow: document.querySelector('#next-page-arrow'),
    };
  }

  showPagination() {
    this.paginationContainer.classList.remove('unShown');
  }

  removePagination() {
    this.paginationContainer.classList.add('unShown');
  }

  addPagesNumbers(data) {
    console.dir(data);
  }
}
