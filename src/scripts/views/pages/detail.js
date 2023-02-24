import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section class="content">
        <div class="restos">
          <h1 class="restos__label">Detail</h1>
          <div class="posts" id="maincontent" tabindex="0">

          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#maincontent');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
  },
};

export default Detail;
