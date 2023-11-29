document.addEventListener("DOMContentLoaded", function () {
    console.log ("DOM Content Loaded");
    const burgerMenu = document.querySelector(".burger-menu");
    const nav = document.querySelector("nav");
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    

menuBtn.addEventListener('click', function () {
     console.log("Menu Button Clicked");
     menu.classList.toggle('active'); 
   });
});