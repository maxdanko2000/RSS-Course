//slider

const prev = document.getElementById('welcome_slider_prev'),
    next = document.getElementById('welcome_slider_next'),
    slides = document.querySelectorAll('.img_cont'),
    counters = document.querySelectorAll('.welcome_slider_counter2_item'),
    currCounts = document.querySelectorAll('.cp');
let index = 0;


const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('img_cont_active');
    }
    slides[n].classList.add('img_cont_active');
}

const activeCounter = n => {
    for (counter of counters) {
        counter.classList.remove('slider_item_active');
    }
    counters[n].classList.add('slider_item_active');
}

const activeCP = n => {
    for (cp of currCounts) {
        cp.classList.remove('cp_active');
    }
    currCounts[n].classList.add('cp_active');
}

const activeCurrent = ind => {
    activeSlide(index);
    activeCounter(index);
    activeCP(index);

}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeCurrent(index);
    } else {
        index++;
        activeCurrent(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeCurrent(index);
    } else {
        index--;
        activeCurrent(index);
    }
}

counters.forEach((counterItem, indexCounter) => {
    counterItem.addEventListener('click', () => {
        index = indexCounter;
        activeCurrent(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const swipeDetect = (el) => {
    let surface = el;
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;

    let startTime = 0;
    let elapsedTime = 0;

    let threshold = 150;
    let restaint = 100;
    let allowedTime = 500;

    surface.addEventListener('mousedown', function (e) {
        startX = e.pageX;
        startY = e.pageY;

        startTime = new Date().getTime();
        e.preventDefault();
    });

    surface.addEventListener('mouseup', function (e) {
        distX = e.pageX - startX;
        distY = e.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;

        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restaint) {
                if (distX > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
            }
        }
        e.preventDefault();
    });
}

let el = document.querySelector('.welcome_posit_img');
swipeDetect(el);

