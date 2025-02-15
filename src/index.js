import { FetchAPI } from './js/api';
import { renderTrendingFilms } from './js/renderTrendingFilms';
import { searchFilms } from './js/searchFilms';
import { onCardClick, closeModalEcs } from './js/onCardClick';
import { getTrailerFilm } from './js/getTrailerFilm';
import { backToTop } from './js/backToTop';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

export const searchForm = document.querySelector('.search-form-input');
export const galleryList = document.querySelector('.gallery');
export const searchResult = document.querySelector('.search-result');

// Classes
export const fetchApi = new FetchAPI();

// listeners
document.addEventListener('click', onCardClick);
document.addEventListener('DOMContentLoaded', renderTrendingFilms());
document.addEventListener('click', getTrailerFilm);
document.addEventListener('keydown', closeModalEcs);
searchForm.addEventListener('input', debounce(searchFilms, DEBOUNCE_DELAY));
