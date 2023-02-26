import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section class="content" tabindex="0"></section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.content');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
