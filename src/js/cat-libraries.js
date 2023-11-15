// -------------Version with libraries------------

import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createMarkup, createMarkupInfoCat } from './markup';

import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '300px',
  fontSize: '13px',
  position: 'left-top',
  distance: '20px',
  closeButton: true,
});

// Object with elements
const elements = {
  breedSelect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

// Call fetchBreeds(), creating markup for select.breed-select
fetchBreeds()
  .then(data => {
    console.log(data);
    loaderHidden();
    elements.breedSelect.classList.replace('js-hidden', 'js-show');
    //   Creating markup
    elements.breedSelect.innerHTML += createMarkup(data);
    new SlimSelect({
      select: elements.breedSelect,
      settings: {
        placeholderText: 'Choose a cat breed',
        allowDeselect: true,
      },
    });
  })
  .catch(error => {
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
    loaderHidden();
    elements.breedSelect.classList.replace('js-show', 'js-hidden');
  });

// Listener on select.breed-select, 'change' event
elements.breedSelect.addEventListener('change', handlerSearch);

// Callback function for listener
function handlerSearch(evt) {
  console.log(evt.currentTarget.value);
  const breedId = evt.currentTarget.value;

  loaderSow();
  elements.catInfo.classList.replace('js-show', 'js-hidden');

  fetchCatByBreed(breedId)
    .then(data => {
      console.log(data);
      elements.catInfo.classList.replace('js-hidden', 'js-show');
      loaderHidden();
      //   Creating markup
      elements.catInfo.innerHTML = createMarkupInfoCat(data);
    })
    .catch(error => {
      Notiflix.Notify.init({
        distance: '50px',
      });
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
      loaderHidden();
    });
}

new SlimSelect({
  select: document.querySelector('#single'),
});

// Load and Error Handling Functions
function loaderSow() {
  elements.loader.classList.replace('js-hidden', 'js-show');
}
function loaderHidden() {
  elements.loader.classList.replace('js-show', 'js-hidden');
}
