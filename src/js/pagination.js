// export default class Pagination {
//   constructor(perPage) {
//     this.perPage = 20;

//     this.paginationContainer = document.querySelector('.pagination');
//     this.paginationNumbers = {
//       previousPageArrow: document.querySelector('#previous-page-arrow'),
//       previousPagesDotted: document.querySelector('#previous-pages-dotted'),
//       numOne: document.querySelector('#internal-num-one'),
//       numTwo: document.querySelector('#internal-num-two'),
//       numThree: document.querySelector('#internal-num-three'),
//       numFour: document.querySelector('#internal-num-four'),
//       numFive: document.querySelector('#internal-num-five'),
//       nextPagesDotted: document.querySelector('#next-pages-dotted'),
//       lastPage: document.querySelector('#last-page'),
//       nextPageArrow: document.querySelector('#next-page-arrow'),
//     };
//   }

//   showPagination() {
//     this.paginationContainer.classList.remove('unShown');
//   }

//   removePagination() {
//     this.paginationContainer.classList.add('unShown');
//   }

//   addPagesNumbers(data) {
//     console.dir(data);
//   }
// }

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export function addPagination({ total_results }) {
  const options = {
    totalItems: total_results,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  return new Pagination('pagination', options);
}
