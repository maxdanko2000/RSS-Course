const artistsSection = document.querySelector('.actists-section');
const picturesSection = document.querySelector('.pictures-section');
const settingSection = document.querySelector('.settings-section')
const mainContent = document.querySelector('.main-section')
const btnSettings = document.querySelector('.buttons-settings')
const btnSave = document.querySelector('.buttons-save')
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

spawnCategories();

function hideMain() {
    mainContent.style.display = 'none';
    btnSettings.style.display = 'none'
    btnSave.style.display = 'block'
}

function showMain() {
    mainContent.style.display = '';
    btnSettings.style.display = ''
    btnSave.style.display = 'none'
}

function showSettings() {
    hideMain();
    settingSection.style.display = 'flex';
}

function hideSettings() {
    settingSection.style.display = 'none';
    showMain();
}

function addStyle() {

}

function removeStyle() {

}

function showPictureCat() {

}

function showArtistCat() {

}
btnSave.addEventListener('click', hideSettings)
btnSettings.addEventListener('click', showSettings)
picturesSection.addEventListener('click', showPictureCat)
artistsSection.addEventListener('click', showArtistCat)