import { galleryItems } from './gallery-items.js';
const listRef = document.querySelector('.gallery');
const galleryMarkup = createGallaryItems(galleryItems);
listRef.insertAdjacentHTML("beforeend", galleryMarkup);

console.log(createGallaryItems(galleryItems));

function createGallaryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
}).join('')

}

listRef.addEventListener("click", onClick);

function onClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const instance = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });

    instance.show();

}
console.log(galleryItems);




