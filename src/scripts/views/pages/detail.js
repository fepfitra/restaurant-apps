import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section class="content" tabindex="0">
      </section>
    `;
  }, 

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.content');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
  },
};

export default Detail;
