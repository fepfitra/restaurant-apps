import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import data from '../DATA.json';

const {restaurants} = data;

const posts = document.querySelector(".posts");

restaurants.forEach((restaurant) => {
  posts.innerHTML += `
    <article class="post-item">
      <img class="post-item__thumbnail"
      src="${restaurant.pictureId}">
      <h2 class="resto__title">${restaurant.name} - ${restaurant.city}</h2>
      <h3 class="resto__rating">Rating - ${restaurant.rating}</h3>
      <p class="resto__desc">${restaurant.description}</p>
    </article>
  `;
});
