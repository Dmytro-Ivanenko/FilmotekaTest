import { FetchAPI } from './js/api';
import { renderTrendingFilms } from './js/renderTrendingFilms';
import { searchFilms } from './js/searchFilms';
import { createMarkupElemetsGallery } from './js/createMarkupElemetsGallery';
import { createModalCardMarkup } from './js/createModalCardMarkup';

// const instance = createModalCardMarkup();
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

// const modalCard = instance.element().querySelector('.modal-card');
// const modalBtnClose = instance.element().querySelector('.modal-btn-close');
export const searchForm = document.querySelector('.search-form-input');
export const galleryList = document.querySelector('.gallery');
export const searchResult = document.querySelector('.search-result');

export const fetchApi = new FetchAPI();

document.addEventListener('click', onCardClick);
document.addEventListener('DOMContentLoaded', renderTrendingFilms());
searchForm.addEventListener('input', debounce(searchFilms, DEBOUNCE_DELAY));
// modalBtnClose.addEventListener('click', instance.close);

async function onCardClick(e) {
  if (e.path[2].className !== 'photo-card') {
    return;
  }

  if (e.path[2].className === 'photo-card') {
    // console.dir(e.path[2].dataset.id);
    id = e.path[2].dataset.id;
    const filmInfoResp = await fetchApi.getFilmToId(id);
    const filmMetaResp = await fetchApi.getMetaById(id);

    let key = null;
    for (let i=0; i<filmMetaResp.data.results.length; i+=1) {
      if (filmMetaResp.data.results[i].name === 'Official Trailer') {
        key = filmMetaResp.data.results[i].key;
      }
    }

    const instance = createModalCardMarkup(filmInfoResp.data, key);
    const modalCard = instance.element().querySelector('.modal-card');
    const modalBtnClose = instance.element().querySelector('.modal-btn-close');
    modalBtnClose.addEventListener('click', instance.close);
    instance.show();
  }
}
