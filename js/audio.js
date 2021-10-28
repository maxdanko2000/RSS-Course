import playList from './playList.js';

const btnPlayPrev = document.querySelector('.play-prev');
const btnPlayNext = document.querySelector('.play-next');
const btnPlay = document.querySelector('.play');
const audioList = document.querySelector('.play-list');

let isPlay = false;
let playNum = 0;
let currAudio = audioList.children[playNum];

const audio = new Audio();

for (let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = playList[i].title;
    audioList.append(li);
}

function setActive(el) {
    el.classList.add('item-active');
}
function removeActive(el) {
    el.classList.remove('item-active');
}


setActive(audioList.children[playNum]);


function playAudio() {
    btnPlay.classList.toggle('pause');
    audio.src = playList[playNum].src;
    if (!isPlay) {
        playMusic();
    } else {
        stopMusic();
    }
}

function playMusic() {
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
}

function stopMusic() {
    audio.pause();
    isPlay = false;
}


function playNext() {
    btnPlay.classList.add('pause');
    removeActive(audioList.children[playNum]);
    playNum++;
    if (playNum > 3) {
        playNum = 0;
        setActive(audioList.children[playNum]);
    }
    audio.src = playList[playNum].src;
    setActive(audioList.children[playNum]);
    playMusic();
}


function playPrev() {

    removeActive(audioList.children[playNum]);
    playNum--;
    if (playNum < 0) {
        playNum = 3;
        setActive(audioList.children[playNum]);
    }
    audio.src = playList[playNum].src;
    setActive(audioList.children[playNum]);
    playMusic();
}


btnPlay.addEventListener('click', playAudio);
btnPlayNext.addEventListener('click', playNext);
btnPlayPrev.addEventListener('click', playPrev);