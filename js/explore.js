class sliderBeforeAfter {
    constructor(option) {
        this.class_name = option.class_name ? option.class_name : 'rectangle_explore'
        this.width = option.width ? option.width : '720px'
        this.height = option.height ? option.height : '700px'
        this.border_width = option.border_width ? option.border_width : '2px'
        this.border_color = option.border_color ? option.border_color : '#fff'
        this.src = option.src ? option.src : './assets/img/explore-slider/after.jpg'
        this.src2 = option.src2
            ? option.src2
            : './assets/img/explore-slider/before.jpg'
        this.showMoreOptionsLog = option.showMoreOptionsLog
            ? (option.showMoreOptionsLog = true)
            : (option.showMoreOptionsLog = false)
    }

    createElem() {
        let elem = this.class_name
        if (this.class_name) {
            const resizeDiv = document.createElement('div')
            const img = document.createElement('img')
            const img2 = document.createElement('img')

            elem = document.querySelector(`.${elem}`)
            elem.style.position = 'relative'
            elem.style.width = this.width
            elem.style.height = this.height

            img.src = this.src
            img2.src = this.src2
            img.style.width = this.width
            img2.style.width = this.width
            img.style.height = '100%'
            img2.style.height = '100%'
            img.style.pointerEvents = 'none'
            img2.style.pointerEvents = 'none'

            resizeDiv.style.position = 'absolute'
            resizeDiv.style.top = '0px'
            resizeDiv.style.left = '0px'
            resizeDiv.style.maxWidth = '100%'
            resizeDiv.style.pointerEvents = 'none'
            resizeDiv.style.height = '100%'
            resizeDiv.style.display = 'block'
            resizeDiv.style.overflow = 'hidden'
            resizeDiv.style.borderRight = `${this.border_width} solid ${this.border_color}`

            elem.append(resizeDiv, img)
            resizeDiv.append(img2)

            // show all options in console.log
            if (this.showMoreOptionsLog) {
                console.table(this)
            }

            // call mousemove handler method throw params
            this.mouseMoveHandler({
                firstDiv: elem,
                secondDiv: resizeDiv,
                img2: img2,
            })
        } else return
    }

    start() {
        this.createElem()
    }

    // all mousemove events
    mouseMoveHandler({ firstDiv, secondDiv }) {
        secondDiv.style.width = firstDiv.clientWidth / 2 + 'px'
        // mousemove handler
        firstDiv.addEventListener('mousedown', (e) => {
            let x = e.offsetX
            secondDiv.style.width = x + 'px'
            secondDiv.style.transition = '.3s'
        })
        // mouseleave handler
        firstDiv.addEventListener('mouseup', (e) => {
            secondDiv.style.transition = '.3s'
            secondDiv.style.width = x + 'px'
        })
        firstDiv.addEventListener('mousemove', (e) => {
            let x = e.offsetX
            secondDiv.style.transition = '.3s'
        })

    }
}

// initialize slider
let slider = new sliderBeforeAfter({
    class_name: 'rectangle_explore',
    width: '720px',
    height: '700px',
    userSelect: 'none',
    border_width: '5px',
    cursor: 'col-resize',
    border_color: 'white',
    //showMoreOptionsLog: true,
})

slider.start()