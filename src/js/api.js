import axios from 'axios';

const API_KEY = '53f2c47317a563cd2628c68ceb6a6673';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie/`;

export class FetchAPI {
  constructor() {
    this.page = 1;
  }

  async fetchTrendingFilms() {
    return await axios.get(`${TREND_URL}?api_key=${API_KEY}`);
  }

  async fetchSearchFilms(searchQuery) {
    return await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${searchQuery}`
    );
  }
}

// .then(response => console.log('жопа'));
// .catch(err => console.log('жопа'));
