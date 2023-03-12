import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate, createRestaurantItemBlankTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <section class="content">
        <div class="restos">
          <h1 class="restos__label">Your Liked Restaurants</h1>
          <div class="posts" id="maincontent">

          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    if (restaurants.length === 0) {
      const contentContainer = document.querySelector('.content');
      contentContainer.innerHTML = createRestaurantItemBlankTemplate();
    } else {
      const restaurantsContainer = document.querySelector('#maincontent');
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Like;
