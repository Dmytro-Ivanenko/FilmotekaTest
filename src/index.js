import { FetchAPI } from './js/api';
import { createMarkupElemetsGallery } from './js/createMarkupElemetsGallery';

import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

const basicLightbox = require('basiclightbox');
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const searchForm = document.querySelector('.search-form-input');
const galleryList = document.querySelector('.gallery');
const searchResult = document.querySelector('.search-result');

const fetchApi = new FetchAPI();

document.addEventListener('click', onCardClick);
document.addEventListener('DOMContentLoaded', renderTrendingFilms());

let galleryEl = [];

async function onCardClick(e) {
  if (e.path[2].className !== 'photo-card') {
    return;
  }

  if (e.path[2].className === 'photo-card') {
    console.dir(e.path[2].dataset.id);
    id = e.path[2].dataset.id;
    const { data } = await fetchApi.getFilmToId(id);
    console.log(data);
  }
}

async function renderTrendingFilms() {
  galleryList.innerHTML = '';
  fetchApi.page = 1;
  const { data } = await fetchApi.fetchTrendingFilms();
  galleryEl = data.results;
  renderGallery();
}

searchForm.addEventListener('input', debounce(SearchFilms, DEBOUNCE_DELAY));

async function SearchFilms(e) {
  const { value } = e.target;

  try {
    if (value.trim() === '') {
      renderTrendingFilms();
      return;
    }

    galleryList.innerHTML = '';
    fetchApi.page = 1;
    const { data } = await fetchApi.fetchSearchFilms(value.trim());

    if (data.total_results === 0) {
      searchResult.innerHTML =
        'Search result not successful. Enter the correct movie name and!';
      renderTrendingFilms();
      return;
    }

    if (data.total_results > 0) {
      searchResult.innerHTML = '';
      galleryEl = data.results;
      console.log(galleryEl);
      renderGallery();
    }
  } catch (error) {
    console.log(error.massage);
  }
}

function renderGallery() {
  const galleryElements = galleryEl.map(createMarkupElemetsGallery);
  galleryList.insertAdjacentHTML('beforeend', galleryElements.join(''));
}

const instance = basicLightbox.create(`
    <div class="modal">
        <div class="modal-card">
            
        </div>
        <button class="modal-btn-close">Close</button>
    </div>
`);

instance.show();
const modalCard = document.querySelector('.modal-card');
const modalBtnClose = document.querySelector('.modal-btn-close');
modalBtnClose.addEventListener('click', instance.close);
modalCard.textContent = 'Hello';
