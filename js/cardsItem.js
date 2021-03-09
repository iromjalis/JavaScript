import cardsArr from './cards.js';

const listEl = document.querySelector('.js-gallery');
console.log(listEl);

const modalImgRef = document.querySelector('.lightbox__image');
const modalRef = document.querySelector('.lightbox');

cardsArr.forEach(img => {
  listEl.insertAdjacentHTML(
    'beforeend',
    `<li class="cards-item"><img src=${img.url} alt="${img.description}" data-fullview="${img.original}"width="320" /></li>`,
  );
});

listEl.addEventListener('click', e => {
  console.log(e.target);
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

// modalRef.addEventListener('click');
