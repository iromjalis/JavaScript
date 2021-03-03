// const selectedById = document.querySelector("#menu");
// selectedById.style.textTransform = "uppercase";
// selectedById.style.fontSize = "2rem";
// console.log(selectedById); // ...

// const menuItemsByTagName = [...document.querySelectorAll("li")];
//!замена текста внутри тега
// menuItemsByTagName.forEach((el) => (el.textContent = `Hello `));
// console.log(menuItemsByTagName); // ...

const firstMenuItem = document.querySelector('.menu-item');
// console.log(firstMenuItem.textContent);
// firstMenuItem.style.color = "#BF4E30";
// console.log(firstMenuItem); // ...
//_____________________________________________
// const article = document.querySelector("article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
{
  /* <a class="link" href="#">Read more...</a>`; */
}
// article.innerHTML = htmlString;

//!Вставить список за раз
// const list = document.querySelector(".list");
// console.log(list);
const tech = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const markup = tech.reduce((string, item) => string + `<li>${item}</li>`, "");
// console.log(markup);
// list.innerHTML = markup;
//____________________________
//!Шаблон для изображения карточки
// const wrapper = document.querySelector(".wrapper");
// inventors.forEach((el) => {
//   wrapper.innerHTML = `<h2>${el.last}</h2><h3>${el.first}</h3><img src=${el.img} width = 150px>`;
// });
//__________________________________________________
// const list = document.querySelector(".list");
// console.log(list);
// const newItem = document.createElement("li");
// const newItem2 = document.createElement("p");
// newItem.textContent = " New Item";
// newItem2.textContent = " paragraph";
// list.insertBefore(newItem, list.firstElementChild);
// const firstEl = list.firstElementChild;
// console.log(firstEl);
// firstEl.before(newItem2);
//_________________________________________________
window.addEventListener(
  'scroll',
  _.throttle(() => {
    // console.log('Scroll event handler invocation every 1s.');
  }, 1000),
);

window.addEventListener(
  'scroll',
  _.debounce(() => {
    // console.log('Scroll event handler invocation every 300ms.');
  }, 300),
);
