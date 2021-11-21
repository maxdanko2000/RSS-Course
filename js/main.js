const artistsSection = document.querySelector('.actists-section');
const picturesSection = document.querySelector('.pictures-section');
const mainContent = document.querySelector('.main-wrapper')
const btnSettings = document.querySelector('button')

function hideContent() {
    mainContent.style.display = 'none';
}

function showContent() {
    mainContent.style.display = 'block';
}

function showSettings() {
    hideContent();
}

function hideSettings() {

}

function addStyle() {

}

function removeStyle() {

}

function showPictureCat() {

}

function showArtistCat() {

}

btnSettings.addEventListener('click', showSettings)
picturesSection.addEventListener('click', showPictureCat)
artistsSection.addEventListener('click', showArtistCat)