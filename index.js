"use strict";

const menu = document.querySelector(`#menu`);
const menu_a = menu.querySelectorAll(`a`);
const menu_v = document.querySelector(`#menu-v`);
const menu_v_img = menu_v.querySelector(`img`);
const logo = document.querySelector(`#logo>img`);
const hero = document.querySelector(`#hero`);

menu_v_img.addEventListener("click", () => {
  menu.classList.toggle(`active`);
  menu_v.classList.toggle(`active`);
  menu_v_img.classList.toggle(`active`);
  logo.classList.toggle(`active`);
  hero.classList.toggle(`active`);
});

menu_a.forEach((element) => {
  element.addEventListener(`click`, () => {
    menu.classList.toggle(`active`);
    menu_v.classList.toggle(`active`);
    logo.classList.toggle(`active`);
    hero.classList.toggle(`active`);
  });
});

// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//   let show = document.getElementById("menu");
//   show.style.display = "block";
// }

// // JavaScript to close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   console.log(event);
//   if (
//     !event.target.matches("#menu-logo") ||
//     !event.target.matches("#menu > a")
//   ) {
//     let dropdowns = document.getElementsByTagName("nav");
//     console.log(dropdowns.length);
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       console.log(i);
//       console.log(dropdowns[i]);
//       let openDropdown = dropdowns[i];
//       console.log(openDropdown);
//       if (openDropdown.style.display === "block") {
//         openDropdown.style.display = "none";
//       }
//     }
//   }
// };
