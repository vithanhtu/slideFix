const slideImg = document.querySelectorAll('.slide-img')
const slidesContainer = document.querySelector('.slides-container')
const prevBtn = document.querySelector('.prev-Btn')
const nextBtn = document.querySelector('.next-Btn')
const slideContent = document.querySelector('.slide-content')
const navigationDots = document.querySelector('.navigation-dots')

let currentSlide = 0
let numberOfImage = slideImg.length
let slideWidth = slideImg[0].clientWidth

// set up silder 
function init() {
    slideImg.forEach(function(img, i) {
        img.style.marginLeft = i * 100 + '%'
    })
    
    createNavigationDots()
}
init()

function createNavigationDots() {
    for(let i = 0; i < numberOfImage; i++) {
        let dot = document.createElement('div')
        dot.classList.add('single-dot')
        navigationDots.appendChild(dot)

        dot.addEventListener('click', () => {
            goToSlide(i)
        })
    }
    navigationDots.children[0].classList.add('active')
}

nextBtn.addEventListener('click', function() {
    if(currentSlide >= numberOfImage - 1) {
        goToSlide(0)
        return
    }
    currentSlide++
    goToSlide(currentSlide)
})

prevBtn.addEventListener('click', function() {
    if(currentSlide <= 0) {
        goToSlide(numberOfImage - 1)
        return
    }
    currentSlide--
    goToSlide(currentSlide)
})

function goToSlide(slideNumber) {
    slideContent.style.transform =
    'translateX(-' + slideWidth * slideNumber + 'px)'
    currentSlide = slideNumber
    setActiveClass()
}

function setActiveClass() {
    let currenActive = document.querySelector('.single-dot.active')
    currenActive.classList.remove('active')
    navigationDots.children[currentSlide].classList.add('active') 
}