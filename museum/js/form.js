const Btn = document.getElementById('btn_form');
const Form = document.getElementById('form');
const Header = document.getElementById('header');

Btn.addEventListener('click', () => {
    Form.style.display = "none";
    Header.classList.remove('display');
});

const BuyNow = document.getElementById('btn_buy_now');

BuyNow.addEventListener('click', () => {
    Form.style.display = "flex";
});

window.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('form') && !target.closest('button')) {
        Form.style.display = "none";
    }
});
