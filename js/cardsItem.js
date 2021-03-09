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

const nav = ['home', 'about us', 'page', 'shop', 'blog', 'contact us'];

const galleryRef = document.createElement('ul');
galleryRef.classList.add('gallery');

const bodyRef = document.querySelector('body');
bodyRef.prepend(galleryRef);

cardsArr.forEach(item => {
  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<li class="gallery__item" ><img src="${item.preview}" alt="${item.description}" width="250" height="auto" />
  <h2>${item.description}</h2>
  <p>${item.price}$</p>
  <button type="button">Add</button></li> `,
  );
});

const originalImgRef = document.createElement('img');
console.log(originalImgRef);
originalImgRef.classList.add('original__image');

bodyRef.prepend(originalImgRef);

const galleryItemRef = document.querySelector('.gallery__item');
const buttonRef = document.querySelectorAll('button');

galleryItemRef.addEventListener('click', e => {
  console.log(e.target);
  console.dir(e.target);
  // console.log(originalImgRef.src);

  if (e.target.localName === 'img') {
    originalImgRef.src = e.target.src;
    originalImgRef.classList.add('is-open');
  }
  if (e.target.localName === 'button') {
    console.log('hello');
    e.target.textContent = 'Added';
    e.target.style.backgroundColor = 'green';
  }
});

bodyRef.addEventListener('click', e => {
  if (e.target.localName !== 'img') {
    originalImgRef.src = '';
    originalImgRef.classList.remove('is-open');
  } else if (e.target.localName === 'img') {
    originalImgRef.src = e.target.src;
    originalImgRef.classList.add('is-open');
  }
});
bodyRef.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    originalImgRef.src = '';
    originalImgRef.classList.remove('is-open');
  }
});

//________________________________
const menuRef = document.createElement('nav');
menuRef.classList.add('nav');
bodyRef.prepend(menuRef);

// modalRef.addEventListener('click');
nav.forEach(item => {
  menuRef.insertAdjacentHTML(
    'beforeend',
    `<li class="nav__item"><a href="">${item}</a></li>`,
  );
});
