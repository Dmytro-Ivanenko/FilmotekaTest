import { FetchAPI } from './js/api';
import { renderTrendingFilms } from './js/renderTrendingFilms';
import { searchFilms } from './js/searchFilms';
import { onCardClick } from './js/onCardClick';
import { getTrailerFilm } from './js/getTrailerFilm';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

export const searchForm = document.querySelector('.search-form-input');
export const galleryList = document.querySelector('.gallery');
export const searchResult = document.querySelector('.search-result');
// const getTrailer = document.querySelector('.gallery-item-trailer');

export const fetchApi = new FetchAPI();

document.addEventListener('click', onCardClick);
document.addEventListener('DOMContentLoaded', renderTrendingFilms());
document.addEventListener('click', getTrailerFilm);

searchForm.addEventListener('input', debounce(searchFilms, DEBOUNCE_DELAY));

// export async function getTrailerFilm(e) {
//   console.log(e);
//   // movie = await fetchApi.getTrailer(id);
//   // const { key } = movie.data.results[0];
//   // console.log(key);
// }

// // getTrailerFilm(76600);
