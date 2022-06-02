import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const createElement = (galleryItems) => {
    let res = galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`;
    })
    .join('');
    gallery.insertAdjacentHTML('afterbegin', res);
}
createElement(galleryItems);

let instance = basicLightbox;

const onGalleryClick = (e) => {
    e.preventDefault();
    const img = e.target;
    const imgURL = img.dataset.source;
    const resultImage = basicLightbox.create(`
        <img src="${imgURL}" />
     `);
     instance = resultImage;
     resultImage.show();
}
gallery.addEventListener('click', onGalleryClick);


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        instance.visible() ? instance.close() : null;
    }
});





