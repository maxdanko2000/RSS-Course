const body = document.querySelector('body');

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg() {
    let bgNum = getRandomNum(1, 20);
    const date = new Date();
    const hours = date.getHours();

    console.log(bgNum);
    //morning
    if (hours >= 6 && hours <= 11) {
        body.style.backgroundImage = `url(./assets/img/images/morning/${bgNum}.jpg)`;

        //afternoon
    } else if (hours >= 12 && hours <= 17) {
        body.style.backgroundImage = `url(./assets/img/images/day/${bgNum}.jpg)`;
        //evening
    } else if (hours >= 18 && hours <= 23) {
        body.style.backgroundImage = `url(./assets/img/images/evening/${bgNum}.jpg)`;        //night
    } else if (hours >= 0 && hours <= 5) {
        body.style.backgroundImage = `url(./assets/img/images/night/${bgNum}.jpg)`;
    }
}
setBg();