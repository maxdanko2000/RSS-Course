const artistsSection = document.querySelector('.actists-section');
const picturesSection = document.querySelector('.pictures-section');

const settingSection = document.querySelector('.settings-section')

const mainContent = document.querySelector('.main-section')

const btnSettings = document.querySelector('.buttons-settings')
const btnSave = document.querySelector('.buttons-save')
const btnHome = document.querySelector('.btn-home')


const categorySection = document.querySelector('.categories-section')
const categoryContent = document.querySelector('.categories-content');
const categoryItem = document.querySelector('.category-item');


function spawnCategories() {
    for (let i = 0; i < 12; i++) {
        let category = document.createElement('div');
        category.className = 'category-item'
        category.innerHTML = categoryItem.innerHTML
        categoryContent.appendChild(category);
    }
}

function showArtistCat() {
    spawnCategories();
    hideMain();
    categorySection.style.display = 'block';
}

function showPictureCat() {

}

function hideMain() {
    mainContent.style.display = 'none';
    btnSettings.style.display = 'none'
    console.log('hided');
}

function showMain() {
    mainContent.style.display = '';
    btnSettings.style.display = ''
    btnSave.style.display = 'none'
    categorySection.style.display = 'none'
    window.location.reload();
}

function showSettings() {
    hideMain();
    settingSection.style.display = 'flex';
    btnSave.style.display = 'block'
}

function hideSettings() {
    settingSection.style.display = 'none';
    showMain();
}

btnHome.addEventListener('click', showMain)
btnSave.addEventListener('click', hideSettings)
btnSettings.addEventListener('click', showSettings)
picturesSection.addEventListener('click', showPictureCat)
artistsSection.addEventListener('click', showArtistCat)


