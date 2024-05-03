'use strict';

const preloader = document.querySelector("[data-preaload]");
window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    this.document.body.classList.add("loaded");
});

const addEventonElements = function(elements, eventType, callback){
    for (let i=0, len = elements.length; i<len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}


const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]")

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventonElements(navTogglers, "click", toggleNavbar);


const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function () {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        header.classList.add("active");
        hideHeader();
    } else {
        header.classList.remove("active");
    }
});


/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSliderPos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSliderPos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSliderPos];
}

const slideNext = function () {
    if (currentSliderPos > heroSliderItems.length -1) {
        currentSliderPos = 0;
    } else {
        currentSliderPos;
    }

    updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
    if (currentSliderPos < 0){
        currentSliderPos = heroSliderItems.length -1;
    } else {
        currentSliderPos--;
    }

    updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSliderInterval;

const autoSlide = function () {
    autoSliderInterval = setInterval(function () {
        slideNext();
    }, 7000);
}

addEventonElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function(){
    clearInterval(autoSliderInterval);
});

addEventonElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load",autoSlide);


