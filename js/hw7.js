//__________1___________________________________________
/*Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.*/

/* Для каждого элемента li.item в списке ul#categories, * и выведет в консоль текст заголовка элемента (тега h2) 
и количество элементов в категории (всех вложенных в него элементов li). */

const ulEl = document.querySelector('#categories');
// console.log(ulEl);

const liEl = ulEl.children;
// console.log(liEl); // [li.item, li.item, li.item]
// console.dir(liEl);
// console.log(`В списке ${liEl.length} категории.`);

for (let i = 0; i < liEl.length; i += 1) {
  // let heading = liEl[i].children[0].textContent;
  const heading = liEl[i].children[0].textContent;
  // let heading = liEl[i].children;
  console.dir(heading);
  console.log(`Категория: ${heading}`);
  let countOfUl = liEl[i].children[1].children.length;
  // console.log('Количество элементов: ', countOfUl);
}
//_____________2__________________________________________
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulElRef = document.querySelector('#ingredients');
// console.log(ulElRef);

let list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
ulElRef.innerHTML = list;
//_______________3______________________________________
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Белый и черный длинный Меховой кот ',
  },
  {
    url:
      ' https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 ',
    alt: ' Оранжевый и Белая рыба кои рядом с желтой рыбой кои ',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Группа бегущих лошадей',
  },
];

const ul = document.querySelector('#gallery');
let listImage = images.reduce(
  (str, item) =>
    str + `<img width='150px' src='${item.url}' alt='${item.alt}' />`,
  '',
);
// console.log(listImage);
ul.innerHTML = listImage;
//_____________4_____________________________________
const valueRef = document.querySelector('#value');
// console.dir(valueRef.innerText);
const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
decrementRef.addEventListener('click', () => {
  valueRef.innerText = Number(valueRef.innerText) - 1;
});
incrementRef.addEventListener('click', () => {
  valueRef.innerText = Number(valueRef.innerText) + 1;
});
//____________5________________________________________
let inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);

let outputEl = document.querySelector('#name-output');

function onInputChange(event) {
  // console.dir(event.currentTarget); //!введенные данные в input
  inputEl = event.currentTarget.value;
  inputEl !== ' '
    ? (outputEl.innerText = event.currentTarget.value)
    : 'незнакомец';
}
//__________6______________________________________________

const inputRef = document.querySelector('#validation-input');
const lengthRef = inputRef.dataset.length;
// console.log(Number(lengthRef)); //6

inputRef.addEventListener('change', e => {
  // console.dir(inputRef);
  // console.log(e.target);
  // console.log(e.currentTarget);
  if (e.target.value.length === Number(lengthRef)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
});
//____________7______________________________
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// console.log(fontSizeControl.value); //50
// console.log(typeof fontSizeControl.value); //50

fontSizeControl.addEventListener('change', e => {
  // console.log(fontSizeControl.value);
  // console.log(text.style.fontSize);
  text.style.fontSize = +fontSizeControl.value + 'px';
});
//______________8________________________________________
const boxes = document.createElement('div');
boxes.classList.add('boxes');
document.querySelector('#controls').appendChild(boxes);

const input = document.querySelector('#controls').children[0];
// console.log(input.value);

const createBtn = document.querySelector('[data-action="render"]');
// console.log(createBtn);

const removeBtn = document.querySelector('[data-action="destroy"]');
// console.log(removeBtn);
let boxQuantity;

input.addEventListener('change', onValueInput);

function onValueInput(event) {
  // console.log(event.currentTarget.value);
  boxQuantity = event.currentTarget.value;
  console.log(boxQuantity);
  return boxQuantity;
}

createBtn.addEventListener('click', () => createBoxes(boxQuantity));
removeBtn.addEventListener('click', () => removeBoxes(boxQuantity));

function createBoxes(boxQuantity) {
  const box = document.createElement('div');
  let width = 30;
  let height = 30;
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
  if (boxQuantity === 1) {
    boxes.append(box);
  }
  if (boxQuantity >= 1) {
    for (let i = 0; i <= boxQuantity; i += 1) {
      width += 10;
      height += 10;
      boxes.append(box);
    }
  }
}

function removeBoxes() {
  boxes.remove();
}

//______IMG_________________
//!при клике на картинку замена на ленивца
const imgRef = document.querySelector('.lenivec');
imgRef.addEventListener('click', e => {
  imgRef.src = imgRef.getAttribute('data');
});

// imgRef.setAttribute('abc', 'def');
// imgRef.alt = 'при клике на картинку замена на ленивца';
// console.dir(imgRef.attributes.data.value); //data img ЛЕНИВЦА https://simple-fauna.ru/wp-content/uploads/2012/07/lenivec.jpg
