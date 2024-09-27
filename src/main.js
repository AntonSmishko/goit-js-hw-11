// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { photoMarkup } from './js/render-functions';

const linkEl = {
  form: document.querySelector('.form'),
};

linkEl.form.addEventListener('submit', formHandler);
let gallery = new SimpleLightbox('.gallery a');
function formHandler(e) {
  e.preventDefault();
  const query =
    e.target.elements['search-area'].value.trim();
  if (query === '') {
    iziToast.error({
      position: 'topRight',
      message: 'Please try again! All fields is empty',
    });
    return;
  }

  fetchImages(query)
    .then(data => {
      if (data.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      photoMarkup(data);
      gallery.refresh();
    })
    .catch()
    .finally();
}
