import * as basicLightbox from 'basiclightbox';

export function createModalCardMarkup({genre_ids, poster_path, title, vote_average, vote_count, popularity, original_title, overview}, key, fetchApi) {
    console.log(title);
    const genres = genre_ids
    .map(genreId => {
      return fetchApi.getGenreById(genreId);
    })
    .join(', ');

  const dateYear = new Date(release_date).getFullYear();
  let images = '';

  if (!poster_path) {
    images =
      'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  } else {
    images = `https://image.tmdb.org/t/p/w1280${poster_path}`;
  }
  const instance = basicLightbox.create(`
    <div class="modal">
        <button class="modal-btn-close">X</button>
        <div class="modal-card">
            <div class="modal-card__images">
                <img
                class="modal-card__image"
                src="${poster_path}"
                alt="${title}"
                />
            </div>
            <div class="modal-card__description">
                <h2 class="modal-card__title">${title}</h2>
                <table class="modal-card__table">
                <tbody>
                    <tr class="modal-card__table-row">
                    <td class="modal-card__table-data modal-card__table-data--grey">Vote / Votes</td>
                    <td class="modal-card__table-data"><span>${vote_average}</span> / <span>${vote_count}</span></td>
                    </tr>
                    <tr class="modal-card__table-row">
                    <td class="modal-card__table-data modal-card__table-data--grey">Popularity</td>
                    <td class="modal-card__table-data">${popularity}</td>
                    </tr>
                    <tr class="modal-card__table-row">
                    <td class="modal-card__table-data modal-card__table-data--grey">Original Title</td>
                    <td class="modal-card__table-data">${original_title}</td>
                    </tr>
                    <tr class="modal-card__table-row">
                    <td class="modal-card__table-data modal-card__table-data--grey">Genre</td>
                    <td class="modal-card__table-data">${genres}</td>
                    </tr>
                </tbody>
                </table>
                <p class="modal-card__about">About</p>
                <p class="modal-card__about-description">
                ${overview} </p>
                <div class="modal-card__btn">
                    <button class="modal-card__btn-watched">add to Watched</button>
                    <button class="modal-card__btn-queue">add to queue</button>
                    <a href="https://www.youtube.com/watch?v=${key}" target="_blank"><button class ="modal-card__btn-showTrailer">WATCH TRAILER</button></a>
                </div>
            </div>
        </div>
    </div>
`);
  return instance;
}
