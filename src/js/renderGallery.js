import { createMarkupElemetsGallery } from './createMarkupElemetsGallery';
import { galleryList, fetchApi } from '../index.js';

export function renderGallery() {
  const galleryElements = galleryEl.map(elem =>
    createMarkupElemetsGallery(elem, fetchApi)
  );
  galleryList.insertAdjacentHTML('beforeend', galleryElements.join(''));
}
