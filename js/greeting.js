
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

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
    const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const currentDate = dateText.toLocaleDateString('en-En', options);
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

function setLocalStorage() {
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage);