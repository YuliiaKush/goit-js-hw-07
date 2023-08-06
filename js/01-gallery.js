import { galleryItems } from './gallery-items.js';

const container = document.querySelector('.gallery');


function createImageListMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img  
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`).join('')

}

container.insertAdjacentHTML('beforeend', createImageListMarkup(galleryItems));
container.addEventListener('click', handlerProductClick);

function handlerProductClick(event) {
  if (event.target === event.currentTarget) {
    return
  }
  event.preventDefault();
  window.addEventListener('keydown', onEscClick);
  const imgOriginalEl = event.target.dataset.source;
  console.log(imgOriginalEl);
  const instance = basicLightbox.create(`<img src = "${imgOriginalEl}">`);
  instance.show();

}


function onEscClick(event) {
    if (event.code === "Escape") {
        onModalClose();
    }
}

function onModalClose() {
  window.removeEventListener('keydown', onEscClick);

  const instance = basicLightbox.create(`<img src = "${imgOriginalEl}">`, {
  onClose: (instance) => {
    instance.close(); 
  },
  onShow: (instance) => {
    instance.show();
  },
});

}

 console.log(galleryItems);


 
 


