// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';

const linkEl = {
  form: document.querySelector('.form'),
};

linkEl.form.addEventListener('submit', formHandler);

function formHandler(e) {
  e.preventDefault();
  const query = e.target.elements['search-area'].value.trim();
  if (query === '') {
    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }
  fetchImages(query);
}
