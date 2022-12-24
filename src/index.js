import { FetchAPI } from './js/api';
import { createMarkupElemetsGallery } from './js/createMarkupElemetsGallery';

import './js/back-to-top';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const searchForm = document.querySelector('.search-form-input');
const galleryList = document.querySelector('.gallery');

const fetchApi = new FetchAPI();

document.addEventListener('DOMContentLoaded', async function () {
  galleryList.innerHTML = '';
  fetchApi.page = 1;
  const { data } = await fetchApi.fetchTrendingFilms();
  galleryEl = data.results;
  // console.log(galleryEl);
  renderGallery();
});

searchForm.addEventListener('input', debounce(SearchFilms, DEBOUNCE_DELAY));

let galleryEl = [];

async function SearchFilms(e) {
  e.preventDefault();
  const { value } = e.target;
  console.log(value);
  galleryList.innerHTML = '';
  fetchApi.page = 1;
  const { data } = await fetchApi.fetchSearchFilms(value.trim());
  galleryEl = data.results;
  console.log(galleryEl);
  renderGallery();
}

function renderGallery() {
  const galleryElements = galleryEl.map(createMarkupElemetsGallery);
  galleryList.insertAdjacentHTML('beforeend', galleryElements.join(''));
}
