import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createElement = (galleryItems) => {
    let res = galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    })
    .join('');
    gallery.insertAdjacentHTML('afterbegin', res);
}
createElement(galleryItems);


new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt"
});