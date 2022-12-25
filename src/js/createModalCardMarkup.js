export function createModalCardMarkup(basicLightbox) {
  const instance = basicLightbox.create(`
    <div class="modal">
        <div class="modal-card">

        </div>
        <button class="modal-btn-close">Close</button>
    </div>
`);
  return instance;
}
