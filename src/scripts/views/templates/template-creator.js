import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <article class="detail-item" tabindex="0">
    <img class="detail-item__thumbnail"
    src="${CONFIG.BASE_URL + CONFIG.MEDIUM_PICTURE + restaurant.pictureId}"
    alt= "${restaurant.description}">
    <h2 class="resto__title"><a href="#/detail/${restaurant.id}">${restaurant.name} - ${restaurant.city}</a></h2>
    <h3 class="resto__rating">Rating - ${restaurant.rating}</h3>
  <h3 class="resto__rating"> 
  ${restaurant.address}
  ${restaurant.categories[0].name}
  ${restaurant.categories[1]}
  ${restaurant.city}
  ${restaurant.customerReviews[0]}
  ${restaurant.description}
  ${restaurant.id}
  ${restaurant.menus[0]}
  ${restaurant.name}
  ${restaurant.pictureId}
  ${restaurant.rating} </h3>
  </article>
`;


const createRestaurantItemTemplate = (restaurant) => `
  <article class="post-item" tabindex="0">
    <img class="post-item__thumbnail"
    src="${CONFIG.BASE_URL + CONFIG.SMALL_PICTURE + restaurant.pictureId}"
    alt= "${restaurant.description}">
    <h2 class="resto__title"><a href="#/detail/${restaurant.id}">${restaurant.name} - ${restaurant.city}</a></h2>
    <h3 class="resto__rating">⭐️ ${restaurant.rating}</h3>
  </article>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate };