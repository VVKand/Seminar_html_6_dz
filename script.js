'use strict';
let menuActive = document.querySelector('.menu');
let headerMenu = document.querySelector('.burger__box');
function toggleMenu() {
menuActive.classList.toggle('hidden');
    }
headerMenu.addEventListener('click', toggleMenu);