import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import AddReviewInitiator from '../../utils/add-review-initiator';

const Detail = {
  async render() {
    return `
      <section class="content"></section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.content');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
        pictureId: restaurant.restaurant.pictureId,
        city: restaurant.restaurant.city,
      },
    });
    AddReviewInitiator.init({
      id: restaurant.restaurant.id,
      inputName: document.getElementById('input__review__name'),
      inputReview: document.getElementById('input__review__data'),
      submitButton: document.querySelector('#submit__review__button'),
      reviewsContainer: document.getElementById('reviews'),
    });
  },
};

export default Detail;
