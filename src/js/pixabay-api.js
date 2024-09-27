const URL_PIXABAY = 'https://pixabay.com/api/';
const API_KEY = '46219346-243694830f7cca451bf7f7da0';

export function fetchImages(query) {
  return fetch(`${URL_PIXABAY}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true
`)
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
