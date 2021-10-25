alert('Уважаемые проверяющие! Таск ещё не доделан, прошу проверить в последний день дедлайна. Надеюсь на фидбэк.')

const time = document.querySelector('.time');
const date = document.querySelector('.date');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
}
showTime();

function showDate() {
    const dateText = new Date();
    const currentDate = dateText.toLocaleDateString();
    date.textContent = currentDate;
    setTimeout(showDate, 1000);
}
showDate();

