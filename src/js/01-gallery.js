// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryElem = document.querySelector('.gallery');

const imagesMarkup = createImagesMarkup(galleryItems);

galleryElem.insertAdjacentHTML('beforeend', imagesMarkup);


function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item"
        href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}"></a>`;
    })
    .join('');
}



  let gallery = new SimpleLightbox('.gallery__item', {
    captionsDelay: 250,
    captionsData: 'alt',
  });

