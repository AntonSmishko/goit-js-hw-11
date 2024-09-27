const linkEl = {
  form: document.querySelector('.form'),
};

linkEl.form.addEventListener('submit', formHandler);

function formHandler(e) {
  e.preventDefault();
  const query = e.target.elements['search-area'].value.trim();
  console.log(query);
}
