const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
refs = {
  body: document.body,
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};
console.dir(refs.start.disabled);

let random = null;
let colorSwitch = null;
console.log(refs.start);
console.log(refs.stop);
refs.start.addEventListener('click', () => {
  colorSwitch = setInterval(() => {
    // выполнится третьим, спустя 2 секунды
    random = Math.round(Math.random() * (colors.length - 1));

    console.log(random);
    document.body.style.backgroundColor = colors[random];
    refs.start.disabled = 'true';
  }, 1000);
});
refs.stop.addEventListener('click', () => {
  clearInterval(colorSwitch);
  refs.start.disabled = 'false';
});
console.dir(refs.start.disabled);
