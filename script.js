// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Prev/Next buttons
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));

// Dots
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, idx) => { dot.addEventListener("click", () => currentSlide(idx+1)); });

// Auto slide every 5 seconds
setInterval(() => plusSlides(1), 5000);

// Burger Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');
burger.addEventListener('click', () => { nav.classList.toggle('nav-active'); });
