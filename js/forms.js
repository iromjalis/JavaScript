/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  //!убрать перезагрузку страницы после клика на SUBMIT
  event.preventDefault();

  console.log(event.currentTarget); //tag form
  const formElements = event.target.elements;

  console.dir(formElements); //все интерактивные элементы формы
  console.dir(formElements.subscription.value); //!выбранное свойство из радиокнопок (name: subscription из HTML)

  const formData = new FormData(event.currentTarget); //конструктор, ссылка на узел-элемент формы =event.currentTarget
  console.log(formData);

  formData.forEach((value, key) => {
    // console.log('onFormSubmit -> key', key);
    // console.log('onFormSubmit -> value', value);
    console.log(`Вы ввели: ${key} : ${value}`);
  });
}
