let button = document.querySelector('.menu__btn');

alert('Совсем забыл про бургер форму) Завтра всё будет')
button.addEventListener('click', e => {
    let burger = document.querySelector('.welcome');

    burger.classList.toggle('close');

})

