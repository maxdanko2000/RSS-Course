let button = document.querySelector('.menu__btn');

console.log("Уважаемые разработчики! прошу проверить мою работу в последний день, так как я вношу ещё доработки по 420px. Надеюсь на фидбэк)");
button.addEventListener('click', e => {
    let burger = document.querySelector('.welcome');

    burger.classList.toggle('close');

})

