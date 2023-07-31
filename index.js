"use strict";

const menu = document.querySelector(`#menu`);
const menu_a = menu.querySelectorAll(`a`);
const menu_v = document.querySelector(`#menu-v`);
const menu_v_img = document.querySelector(`#menu-v_img`);
const logo = document.querySelector(`#logo_img`);
const hero = document.querySelector(`#hero`);
const projects = document.querySelector(`#projects`);
const projects_place = document.querySelector(`#p_all`);

const project_array = [
  {
    picture: `https://github.com/ZWebD/MapTrack/raw/main/screencapture-serene-bonbon-84c4b5-netlify-app-2023-07-25-10_34_27.png`,
    h2: `MapTrack`,
    p: `Is a small activity tracker app You can record your Running / Cycling exercises with.`,
    git: `https://serene-bonbon-84c4b5.netlify.app/`,
    demo: `https://github.com/ZWebD/MapTrack`,
  },
  {
    picture: ``,
    h2: ``,
    p: ``,
    git: ``,
    demo: ``,
  },
  {
    picture: ``,
    h2: ``,
    p: ``,
    git: ``,
    demo: ``,
  },
  {
    picture: ``,
    h2: ``,
    p: ``,
    git: ``,
    demo: ``,
  },
];

menu_v_img.classList.add(`bouncing`);

menu_v_img.addEventListener(`click`, () => {
  menu.classList.toggle(`active`);
  menu_v.classList.toggle(`active`);
  menu_v_img.classList.toggle(`active`);
  menu_v_img.classList.remove(`bouncing`);
  logo.classList.toggle(`active`);
  hero.classList.toggle(`active`);
});

menu_a.forEach((element) => {
  element.addEventListener(`click`, () => {
    menu.classList.toggle(`active`);
    menu_v.classList.toggle(`active`);
    menu_v_img.classList.toggle(`active`);
    menu_v_img.classList.remove(`bouncing`);
    logo.classList.toggle(`active`);
    hero.classList.toggle(`active`);
  });
});

(() => {
  project_array.forEach((e) => {
    let html = `
      <div class="project">
      <picture class="p_pic">
      <source srcset="${e.picture}" media="" />
      <img src="${e.picture ? e.picture : `img/Rectangle5.svg`}" alt="" />
      </picture>
      <div class="detail">
      <h2>${e.h2}</h2>
      <p>
      ${e.p}
      </p>
      <div>
      <a class="button" target="_blank" href="${e.demo}">
      Live Demo
      </a>
      <a class="button" target="_blank" href="${e.git}">
      GitHub
      </a>
          </div>
          </div>`;
    console.log(html);
    projects_place.insertAdjacentHTML("afterend", html);
  });
})();

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
