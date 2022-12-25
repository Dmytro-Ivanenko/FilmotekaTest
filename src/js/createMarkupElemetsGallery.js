export function createMarkupElemetsGallery(
  { id, title, poster_path, release_date = '', genre_ids },
  fetchApi
) {
  const genres = genre_ids
    .map(genreId => {
      return fetchApi.getGenreById(genreId);
    })
    .join(', ');

  const dateYear = new Date(release_date).getFullYear();

  return `<div class="photo-card"
  data-id=${id}
  >
  <a class="gallery__item">
    <img
      class="gallery__image"
      loading="lazy"
      src="https://image.tmdb.org/t/p/w1280${poster_path}"
      alt="${title}"

    />
  </a>

  <div class="info">
    <p class="info-title">${title}</p>
    <div class="info-other">
      <p class="info-item">Жанр: </b>${genres}</p>
      <p class="info-item">${dateYear}</p>
    </div>
  </div>
</div>`;
}
