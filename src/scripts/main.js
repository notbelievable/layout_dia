'use strict';

const btnMenu = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#nav-menu');
const noScroll = document.body;
const menuLinks = document.querySelectorAll('.nav__link');



const backImages = [
  'src/images/hero-screen2.png',
  'src/images/qPojqUji_y4.png',
  'src/images/GwVmBgpP-PQ.png'];

let currentIndex = 0;

const slider = document.getElementById('hero-slider');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

function changeBackground(index) {
  slider.style.backgroundImage = `url(${backImages[index]})`;
}

btnRight.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex >= backImages.length) {
    currentIndex = 0;
  }
  changeBackground(currentIndex);
});

btnLeft.addEventListener('click', () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = backImages.length - 1;
  }
  changeBackground(currentIndex);
});



btnMenu.addEventListener('click', function() {
  navMenu.classList.toggle('nav--open');
  noScroll.classList.toggle('no-scroll');
});

function closeMenu() {
  navMenu.classList.remove('nav--open');
  noScroll.classList.remove('no-scroll');
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
