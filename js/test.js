const nav = document.querySelector(".js-nav");

nav.addEventListener('click', handleNavClick)


function handleNavClick(e){
e.preventDefault()

const target = e.target

if(target.nodeName !== 'A'){
    return
``
}
setActiveLink(target)

}

function setActiveLink(nextActiveLink){
    const currentActiveLink = nav.querySelector('a.active')

    if(currentActiveLink){
        currentActiveLink.classList.remove('active')
    }
    nextActiveLink.classList.add('active')
}
window.addEventListener(
    'scroll',
    _.debounce(() => {
      console.log('Scroll event handler invocation every 300ms.');
    }, 3000),
  );
  