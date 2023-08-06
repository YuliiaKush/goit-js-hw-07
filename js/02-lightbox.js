import { galleryItems } from './gallery-items.js';
const listRef = document.querySelector('.gallery');


function createGallaryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
}).join('')
}
listRef.insertAdjacentHTML("beforeend", createGallaryItems (galleryItems));

    const instance = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });
console.log(galleryItems);




