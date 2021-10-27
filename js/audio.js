import playList from './playList.js';

const btnPlayPrev = document.querySelector('.play-prev');
const btnPlayNext = document.querySelector('.play-next');
const btnPlay = document.querySelector('.play');
const audioList = document.querySelector('.play-list');

let isPlay = false;
let playNum = 0;

for (let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = playList[i].title;
    audioList.append(li);
}

const audio = new Audio();
function playAudio() {
    btnPlay.classList.toggle('pause');
    audio.src = playList[playNum].src;
    function playMusic() {
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
    function stopMusic() {
        audio.pause();
        isPlay = false;
    }
    if (!isPlay) {
        playMusic();
    } else {
        stopMusic();
    }

}

function playNext() {
    playNum++;
    if (playNum > 3) {
        playNum = 0;
    }
    playAudio();
}
function playPrev() {
    playNum--;
    if (playNum < 0) {
        playNum = 3;
    }
    playAudio();
}


btnPlay.addEventListener('click', playAudio);
btnPlayNext.addEventListener('click', playNext);
btnPlayPrev.addEventListener('click', playPrev);