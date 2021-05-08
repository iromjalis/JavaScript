import cardGallery from "./gallery-items.js"
const refs = {
    cardsContainer: document.querySelector('.js-gallery'),
    lightBox: document.querySelector('.lightbox'),
    modalImage: document.querySelector('.lightbox__image'),
    closeBtn: document.querySelector('.button[data-action="close-lightbox"]'),
    card: document.querySelector('.gallery-item'),
    overlay: document.querySelector('.lightbox__overlay'),
}
function cardMarkup(cardGallery){ 
   return  cardGallery.map(({preview, original,description})=>{
        return        `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${preview}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`})}

    const markup = cardMarkup(cardGallery)
    // console.log(markup);
    refs.cardsContainer.insertAdjacentHTML('beforeend', markup)

    refs.cardsContainer.addEventListener('click', (e)=>{
        e.preventDefault();
        // console.log(e.target);
        // console.log(e.target.nodeName);
        
        if(e.target.nodeName === 'IMG'){
onModalOpen(e)

        }
    })

    function onModalOpen(e){
        refs.lightBox.classList.add('is-open'),
        refs.modalImage.src = e.target.src
        
    }
    refs.overlay.addEventListener('click', (e)=>{
        if(e.target === refs.overlay ){

            onModalClose()
        }
    })
    function onModalClose(){            
        refs.lightBox.classList.remove('is-open');
    refs.modalImage.src = ''

    }
    
    window.addEventListener('keydown', (e)=>{
        if( e.code === 'Escape'
        ){
            onModalClose()
        }
            })