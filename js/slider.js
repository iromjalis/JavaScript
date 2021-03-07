import cards from './gallery-items.js';

const imageGalleryRef = document.querySelector('.image-gallery');
const imageViewRef = document.querySelector('.fullview>img');
const previewRef = document.querySelector('.preview');

cards.forEach(el => {
  previewRef.insertAdjacentHTML(
    'beforeend',
    `<li><img src="${el.preview}" alt="${el.description}" data-fullview="${el.original}" width="150"></li>
  `,
  );
});

previewRef.addEventListener('click', e => {
  console.log(e.target);
  console.dir(e.target);
  console.log(imageViewRef);
  console.dir(imageViewRef);
  console.log('hello');
  if (e.target.localName !== 'img') {
    console.log('wrong');
    return;
  }
  if (e.target.localName === 'img') {
    imageViewRef.src = e.target.src;
    imageViewRef.alt = e.target.alt;
  }
});
