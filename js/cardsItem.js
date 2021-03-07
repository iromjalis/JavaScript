import cardsArr from './cards.js';

const listEl = document.createElement('ul');
console.log(listEl);
listEl.classList.add('cards-list');

const modalImgRef = document.querySelector('.modal-img');
const modalRef = document.querySelector('.modal');

cardsArr.forEach(img => {
  listEl.insertAdjacentHTML(
    'beforeend',
    `<li><img src=${img.url} alt="${img.description}" /></li>`,
  );
});
// const markup = cardsArr
//   .map(
//     ({ name, url, id, description }) =>
//       `<li><p>${name}</p><img src='${url}' alt='${description}' id='${id}' width='320'></img></li>`,
//   )
//   .join(' ');

// listEl.insertAdjacentHTML('afterbegin', markup);

listEl.addEventListener('click', e => {
  console.log('hello');
  if (e.target.localName === 'img') {
    modalRef.style.display = 'block';
    modalImgRef.src = e.target.src;
  }
});

modalRef.addEventListener('click', e => {
  console.log('hello');
  if (e.target.localName !== 'img') {
    modalRef.style.display = 'none';
    modalImgRef.src = '';
  }
});

window.addEventListener('keydown', e => {
  console.log(e.keyCode);
  if (e.key === 'Escape') {
    modalRef.style.display = 'none';
    modalImgRef.src = '';
  }
});

modalRef.addEventListener('click');
