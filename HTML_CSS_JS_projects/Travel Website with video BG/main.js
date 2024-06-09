const menubtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menubtn.addEventListener("click", ()=> {
    menubtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns= document.querySelectorAll(".nav-btn");
const slides= document.querySelectorAll(".video-slide");
const content= document.querySelectorAll(".content");

var sliderNav = function(mannual){
    btns.forEach((btn)=> {
        btn.classList.remove('active');
    });

    slides.forEach((slides)=> {
        slides.classList.remove('active');
    });

    content.forEach((content)=> {
        content.classList.remove('active');
    });


    btns[mannual].classList.add("active");
    slides[mannual].classList.add("active");
    content[mannual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    sliderNav(i);
});
});