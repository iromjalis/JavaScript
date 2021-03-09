import cards from './gallery-items.js';

const imageGalleryRef = document.querySelector('.image-gallery');
const imageViewRef = document.querySelector('.fullview>img');
const previewRef = document.querySelector('.preview');
const arrowLeftRef = document.querySelector('.arrowLeft');
const arrowRightRef = document.querySelector('.arrowRight');
let index = +imageViewRef.dataset.index;

cards.forEach((el, index) => {
  previewRef.insertAdjacentHTML(
    'beforeend',
    `<li><img src="${el.preview}" alt="${el.description}" data-fullview="${el.original}" data-index="${index}" width="150"></li>
  `,
  );
});

previewRef.addEventListener('click', e => {
  if (e.target.localName !== 'img') {
    return;
  }
  if (e.target.localName === 'img') {
    // console.log(e.target.dataset.index);
    imageViewRef.src = e.target.src;
    imageViewRef.alt = e.target.alt;
  }
});
function setNewSrc(step, index) {
  imageViewRef.dataset.index = `${index + step}`;
  console.log(cards[Number(index) + Number(step)]);
  imageViewRef.src = cards[index + step].original;
}

function arrowLeft() {
  let index = Number(imageViewRef.dataset.index);
  if (index === 0) {
    setNewSrc(0, cards.length - 1);
    return;
  }
  setNewSrc(-1, index);
}

function arrowRight() {
  let index = +imageViewRef.dataset.index;
  if (index === cards.length - 1) {
    setNewSrc(0, 0);
    return;
  }
  setNewSrc(1, index);
}

window.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') {
    arrowLeft();
  }
  if (e.key === 'ArrowRight') {
    arrowRight();
  }
});
