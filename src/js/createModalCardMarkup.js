import * as basicLightbox from 'basiclightbox';

export function createModalCardMarkup(data) {
  //   console.log(data);
  const instance = basicLightbox.create(`
    <div class="modal">
        <button class="modal-btn-close">X</button>
        <div class="modal-card">
            <div class="modal-card__images">
                <img
                class="modal-card__image"
                src="https://image.tmdb.org/t/p/w1280/ci5A9TPmNajMxt1L8p4KlZ76sc9.jpg"
                alt="Title"
                />
            </div>
            <div class="modal-card__description">
                <h2 class="modal-card__title">A FISTFUL OF LEAD</h2>
                <table class="modal-card__table">
                <tbody>
                    <tr class="modal-card__table-row">
                    <td class="modal-card__table-data modal-card__table-data--grey">Vote / Votes</td>
                    <td class="modal-card__table-data"><span>7.3</span> / 1260</td>
                    </tr>
                    <tr class="modal-card__table-row">
                    <td class="modal-card__table-data modal-card__table-data--grey">Popularity</td>
                    <td class="modal-card__table-data">100.2</td>
                    </tr>
                    <tr class="modal-card__table-row">
                    <td class="modal-card__table-data modal-card__table-data--grey">Original Title</td>
                    <td class="modal-card__table-data">A FISTFUL OF LEAD</td>
                    </tr>
                    <tr class="modal-card__table-row">
                    <td class="modal-card__table-data modal-card__table-data--grey">Genre</td>
                    <td class="modal-card__table-data">Western</td>
                    </tr>
                </tbody>
                </table>
                <p class="modal-card__about">About</p>
                <p class="modal-card__about-description">
                Four of the West’s most infamous outlaws assemble to steal a huge
                stash of gold from the most corrupt settlement of the gold rush towns.

                </p>
                <div class="modal-card__btn">
                    <button class="modal-card__btn-watched">add to Watched</button>
                    <button class="modal-card__btn-queue">add to queue</button>
                </div>
            </div>
        </div>
    </div>
`);
  return instance;
}
