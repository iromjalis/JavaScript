const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const changeBtnStatus = (remove, add) => {
  refs.start.disabled = add;
  refs.stop.disabled = remove;
};

refs = {
  body: document.body,
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

let random = null;
let colorSwitch = null;
refs.start.addEventListener('click', () => {
  changeBtnStatus(false, true);
  colorSwitch = setInterval(() => {
    // выполнится третьим, спустя 2 секунды
    random = Math.round(Math.random() * (colors.length - 1));

    document.body.style.backgroundColor = colors[random];
  }, 1000);
});
refs.stop.addEventListener('click', () => {
  clearInterval(colorSwitch);
  changeBtnStatus(true, false);
});
