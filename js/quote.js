const changeQuote = document.querySelector('.change-quote');
const textQuote = document.querySelector('.quote');
const authorQuote = document.querySelector('.author')

function getRandomNumQ(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getQuotes() {
    let randomN = getRandomNumQ(1, 5);
    if (randomN < 1) {
        randomN = 6;
    }
    if (randomN > 6) {
        randomN = 1;
    }
    const quotes = './js/quetes.json';
    const res = await fetch(quotes);
    const data = await res.json();

    textQuote.textContent = `${data[randomN].quote}`;
    authorQuote.textContent = `${data[randomN].author}`;
    randomN++;
}
getQuotes();
changeQuote.addEventListener('click', getQuotes);
