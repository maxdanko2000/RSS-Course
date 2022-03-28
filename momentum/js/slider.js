const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next')
let randomNum;

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg() {
    let bgNum = getRandomNum(1, 20);
    const date = new Date();
    const hours = date.getHours();
    let img = new Image();
    srcMorning = `./assets/img/images/morning/${bgNum}.jpg`;
    srcDay = `./assets/img/images/day/${bgNum}.jpg`;
    srcEvening = `./assets/img/images/evening/${bgNum}.jpg`;
    srcNight = `./assets/img/images/night/${bgNum}.jpg`;
    //morning
    if (hours >= 6 && hours <= 11) {
        img.src = srcMorning;
        img.onload = () => {
            body.style.backgroundImage = `url(./assets/img/images/morning/${bgNum}.jpg)`;
        };
        //afternoon
    } else if (hours >= 12 && hours <= 17) {
        img.src = srcDay;
        img.onload = () => {
            body.style.backgroundImage = `url(./assets/img/images/day/${bgNum}.jpg)`;
        };
        //evening
    } else if (hours >= 18 && hours <= 23) {
        img.src = srcEvening;
        img.onload = () => {
            body.style.backgroundImage = `url(./assets/img/images/evening/${bgNum}.jpg)`;
        };
        //night    
    } else if (hours >= 0 && hours <= 5) {
        img.src = srcNight;
        img.onload = () => {
            body.style.backgroundImage = `url(./assets/img/images/night/${bgNum}.jpg)`;
        };
    }

}
setBg();

function getSlideNext() {
    randomNum++;
    if (randomNum < 1) {
        randomNum = 20;
    }
    if (randomNum > 20) {
        randomNum = 1;
    }
    const date = new Date();
    const hours = date.getHours();
    let img = new Image();
    srcMorning = `./assets/img/images/morning/${randomNum}.jpg`;
    srcDay = `./assets/img/images/day/${randomNum}.jpg`;
    srcEvening = `./assets/img/images/evening/${randomNum}.jpg`;
    srcNight = `./assets/img/images/night/${randomNum}.jpg`;
    //morning
    if (hours >= 6 && hours <= 11) {
        img.src = srcMorning;
        img.onload = () => {
            body.style.backgroundImage = `url(./assets/img/images/morning/${randomNum}.jpg)`;
        };
        //afternoon
    } else if (hours >= 12 && hours <= 17) {
        img.src = srcDay;
        img.onload = () => {
            body.style.backgroundImage = `url(./assets/img/images/day/${randomNum}.jpg)`;
        };
        //evening
    } else if (hours >= 18 && hours <= 23) {
        img.src = srcEvening;
        img.onload = () => {
            body.style.backgroundImage = `url(./assets/img/images/evening/${randomNum}.jpg)`;
        };
        //night    
    } else if (hours >= 0 && hours <= 5) {
        img.src = srcNight;
        img.onload = () => {
            body.style.backgroundImage = `url(./assets/img/images/night/${randomNum}.jpg)`;
        };
    }
}

function getSlidePrev() {
    randomNum--;
    if (randomNum < 1) {
        randomNum = 20;
    }
    if (randomNum > 20) {
        randomNum = 1;
    }
    const date = new Date();
    const hours = date.getHours();
    let img = new Image();
    srcMorning = `./assets/img/images/morning/${randomNum}.jpg`;
    srcDay = `./assets/img/images/day/${randomNum}.jpg`;
    srcEvening = `./assets/img/images/evening/${randomNum}.jpg`;
    srcNight = `./assets/img/images/night/${randomNum}.jpg`;
    //morning
    if (hours >= 6 && hours <= 11) {
        img.src = srcMorning;
        img.onload = () => {
            body.style.backgroundImage = `url(./assets/img/images/morning/${randomNum}.jpg)`;
        };
        //afternoon
    } else if (hours >= 12 && hours <= 17) {
        img.src = srcDay;
        img.onload = () => {
            body.style.backgroundImage = `url(./assets/img/images/day/${randomNum}.jpg)`;
        };
        //evening
    } else if (hours >= 18 && hours <= 23) {
        img.src = srcEvening;
        img.onload = () => {
            body.style.backgroundImage = `url(./assets/img/images/evening/${randomNum}.jpg)`;
        };
        //night    
    } else if (hours >= 0 && hours <= 5) {
        img.src = srcNight;
        img.onload = () => {
            body.style.backgroundImage = `url(./assets/img/images/night/${randomNum}.jpg)`;
        };
    }
}

slidePrev.addEventListener('click', getSlidePrev);
slideNext.addEventListener('click', getSlideNext);

