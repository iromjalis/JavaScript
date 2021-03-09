const ulList = document.querySelector('.test_list')
console.log(ulList);
const liItem = document.querySelector('.test_item')
liItem.textContent = 'Text'
console.log(liItem);

const newLi = liItem.cloneNode(true)
newLi.textContent='New LI'
ulList.appendChild(newLi)
ulList.insertAdjacentHTML('beforeend', `<li><p>insertAdjacentHTML</p></li>`)

const newEl = document.createElement('a')
newEl.classList.add('.link')
newEl.textContent = 'Link'
liItem.appendChild(newEl)

const imgEl = document.createElement('img')
imgEl.alt = 'No photo'
ulList.before(imgEl)

