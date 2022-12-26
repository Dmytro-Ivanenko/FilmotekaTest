import { createMarkupElemetsGallery } from './createMarkupElemetsGallery';
import { galleryList, fetchApi } from '../index.js';

export function renderGallery(galleryEl) {
  // console.log('galleryEl: ', galleryEl);
  const galleryElements = galleryEl.map(elem =>
    createMarkupElemetsGallery(elem, fetchApi)
  );
  galleryList.insertAdjacentHTML('beforeend', galleryElements.join(''));
}
