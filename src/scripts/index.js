import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

// const { restaurants } = data;

// const posts = document.querySelector('.posts');
// const hero = document.querySelector('.hero');

// restaurants.forEach((restaurant) => {
//   posts.innerHTML += `
//     <article class="post-item" tabindex="0">
//       <img class="post-item__thumbnail"
//       src="${restaurant.pictureId}"
//       alt= "${restaurant.description}">
//       <h2 class="resto__title">${restaurant.name} - ${restaurant.city}</h2>
//       <h3 class="resto__rating">Rating - ${restaurant.rating}</h3>
//     </article>
//   `;
// });

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
