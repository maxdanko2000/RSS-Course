alert('Уважаемые проверяющие! Таск ещё не доделан, прошу проверить в последний день дедлайна. Надеюсь на фидбэк.')

const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
}
showTime();

function showDate() {
    const dateText = new Date();
    const currentDate = dateText.toLocaleDateString();
    date.textContent = currentDate;
}

function showGreeting() {
    const date = new Date();
    const hours = date.getHours();
    function getTimeOfDay() {
        let timeDay;
        if (hours >= 6 && hours <= 11) {
            timeDay = 'morning';
            return timeDay;
        } else if (hours >= 12 && hours <= 17) {
            timeDay = 'afternoon'
            return timeDay;
        } else if (hours >= 18 && hours <= 23) {
            timeDay = 'evening'
            return timeDay;
        } else if (hours >= 0 && hours <= 5) {
            timeDay = 'night'
            return timeDay;
        }
    }
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}
showGreeting();