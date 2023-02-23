import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import data from '../DATA.json';

const { restaurants } = data;

const posts = document.querySelector('.posts');
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

restaurants.forEach((restaurant) => {
  posts.innerHTML += `
    <article class="post-item" tabindex="0">
      <img class="post-item__thumbnail"
      src="${restaurant.pictureId}"
      alt= "${restaurant.description}">
      <h2 class="resto__title">${restaurant.name} - ${restaurant.city}</h2>
      <h3 class="resto__rating">Rating - ${restaurant.rating}</h3>
    </article>
  `;
});

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', (event) => {
  drawer.classList.remove('open');
  event.stopPropagation();
});

main.addEventListener('click', (event) => {
  drawer.classList.remove('open');
  event.stopPropagation();
});
