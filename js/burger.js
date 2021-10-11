let button = document.querySelector('.menu__btn');


alert('Уважаемые проверяющие. Просьба проверить таск в последний день кроссчека, т.к. ещё ведутся доработки. Надеюсь на фидбэк')
button.addEventListener('click', e => {
    let burger = document.querySelector('.welcome');

    burger.classList.toggle('close');

})

