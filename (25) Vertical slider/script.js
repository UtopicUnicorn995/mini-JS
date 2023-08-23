const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-side')
const SlideLeft = document.querySelector('.left-side')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

SlideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))

downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlideIndex ++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0
        }
    }else if(direction === 'down'){
        activeSlideIndex --
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    SlideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}