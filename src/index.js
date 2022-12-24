import { FetchAPI } from './js/api';
import { createMarkupElemetsGallery } from './js/createMarkupElemetsGallery';

import './js/back-to-top';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const searchForm = document.querySelector('.search-form-input');
const galleryList = document.querySelector('.gallery');
const searchResult = document.querySelector('.search-result');

const fetchApi = new FetchAPI();

document.addEventListener('click', onCardClick);
document.addEventListener('DOMContentLoaded', renderTrendingFilms());

let galleryEl = [];

function onCardClick(e) {
  if (e.path[2].className !== 'photo-card') {
    return;
  }

  if (e.path[2].className === 'photo-card') {
    console.dir(e.path[2].dataset.id);
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
