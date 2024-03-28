
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const hidden = document.querySelector('.hidden-screen');
const turn = document.querySelector('.turn')
const navUl = document.querySelector('.nav-ul');
const body = document.querySelector('body');




//Burger menu

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
    hidden.classList.toggle('turn');
    body.classList.toggle('overflow-off');
})