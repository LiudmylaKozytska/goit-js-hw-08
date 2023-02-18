import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textEl = document.querySelector('textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const dataFormEl = localStorage.getItem(LOCAL_STORAGE_KEY);
const formData = {};

formEl.addEventListener(
  'input',
  throttle(saveToLocalStorage, 500),
  getDataFormEl
);

function saveToLocalStorage() {
  (formData.email = inputEl.value.trim()),
    (formData.message = textEl.value.trim()),
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function getDataFormEl() {
  if (dataFormEl) {
    const parsedData = JSON.parse(dataFormEl);
    (inputEl.value = parsedData.email || ''),
      (textEl.value = parsedData.message || '');
  }
}

getDataFormEl();

formEl.addEventListener('submit', event => {
  event.preventDefault();
  saveToLocalStorage();
  console.log(formData);

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  event.currentTarget.reset();
});
