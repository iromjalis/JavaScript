//метод window.setTimeout(callback, delay, args)
//позволяет зарегистрировать отложенный вызов функции

//!пример кто быстрее будет в консоли
/*const logMessage = () => {
    console.log('Лог при вызове callbback-функции через 3 сек');
}

console.log('До вызова setTimeout');

setTimeout((x) => {
    console.log(x);
    console.log('Внутри callback для setTimeout');
}, 2000, 5)
console.log('После вызова setTimeout');*/
//=========================

const NOTIFICATION_DELAY = 3000;
let timeoutId = null
const refs = {
    subscribeBtn: document.querySelector('button[data-subcribe] '),
    modal: document.querySelector('#subscription-modal'),
    notification: document.querySelector('.js-alert')
}
console.log(refs.notification);
refs.notification.addEventListener('click', onNotificationClick)

showNotification()

function onNotificationClick() {
    hideNotification()

    clearTimeout(timeoutId)
}

function showNotification() {
    refs.notification.classList.add('is-visible')

    timeoutId = setTimeout(() => {
        console.log('нужно закрыть алерт');

        hideNotification()
    }, NOTIFICATION_DELAY)
}

function hideNotification() {
    refs.notification.classList.remove('is-visible')
}

//надоедалка

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPT = 3;

let promptCounter = 0
let hasSubscribed = false

const intervalId = setInterval(() => {
    if (promptCounter === MAX_PROMPT_ATTEMPT || hasSubscribed) {
        console.log('Останавливаем интервал');
        clearInterval(intervalId)
        return;
    }
    console.log('ПОДПИШИСЬ на рассылку! - ' + Date.now());
    promptCounter += 1;
    console.log(promptCounter);
}, PROMPT_DELAY)

//MODAL

// import BSN from 'bootstrap.native'

const modal = new BSN.Modal('#subscription-modal')
const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPT = 3;
// let hasSubscribed = false
console.log(modal);

openModal()

refs.modal = new BSN.Modal('#hide.bs.modal', openModal)
refs.subscribeBtn.addEventListener('click', onSubscribeButtonClick)


//заводим setTimeout после закрытия модалки каждый раз
function openModal() {
    if (promptCounter === MAX_PROMPT_ATTEMPT || hasSubscribed) {
        clearTimeout()
        return;
    }
    setTimeout(() => {
        modal.show();
        promptCounter += 1;

        console.log('открываем модалку');
    }, PROMPT_DELAY);
}

function onSubscribeButtonClick() {
    hasSubscribed = true;
    modal.hide();
}

//////---------------------------------
const date = new Date();
console.log(date)