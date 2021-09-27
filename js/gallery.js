window.onload = test();

function test (){
    
    let img = [
        '<img class="gallery_image" src="./assets/img/galery/galery1.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery2.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery3.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery4.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery5.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery6.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery7.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery8.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery9.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery10.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery11.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery12.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery13.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery14.jpg" alt="no Image">',
        '<img class="gallery_image" src="./assets/img/galery/galery15.jpg" alt="no Image">',

    ];

let cont = document.querySelectorAll('._select');

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
img = shuffle(img);

for(let i=0; i<cont.length; i++){
    cont[i].innerHTML = img[i];
}
}