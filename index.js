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
    p: `It's a small App for recording Running and Cycling exercises`,
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
    picture: `https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/6374a82e12e31e2e62ce331a/screenshot_2022-11-16-09-07-02-0000.png`,
    h2: `Guess a Number`,
    p: `Guess a number between 1 and 20 the game will tell you whether the number is higher or lower.`,
    git: `https://github.com/ZWebD/NumberGuess`,
    demo: `https://jade-crisp-d9ffdf.netlify.app/`,
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
  project_array
    .slice()
    .reverse()
    .forEach((e) => {
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

      projects_place.insertAdjacentHTML("afterend", html);
    });
})();
