const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 80);
});

//меню гамбургер

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: '2500',
    reset: true
})
sr.reveal ('.home-text', {delay: 300});
sr.reveal ('.home-img', {delay: 400});
sr.reveal ('.container', {delay: 300});

sr.reveal ('.aboat-img', {});
sr.reveal(',about-text', {delay: 300});

sr.reveal('.middle-text', {});
sr.reveal('.row-btn,.shop-content', {delay: 300});
sr.reveal('review-content, .contact', {delay: 300});
