import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => { 
  let categories = '';
  restaurant.categories.forEach((category) => {
    categories += `${category.name}, `;
  })
  categories = categories.substring(0, categories.length-2);

  return`
    <h1 class="desc-item__title">${restaurant.name} - ${restaurant.city}</h2>
    <div class="detail-content">
      <article id="desc-item" class="detail-card" tabindex="0">
        <div class="desc-item__thumbnail">
          <img class="desc-item__thumbnail-image"
          src="${CONFIG.BASE_URL + CONFIG.LARGE_PICTURE + restaurant.pictureId}"
          alt="${restaurant.description}">
          <div class="desc-item__rating">
            <h2 class="desc-item__rating-score">⭐️ ${restaurant.rating}</h2>
          </div>
        </div>

        <h3 class="desc-item__info">Address</h3>
        <h4 class="desc-item__info-value">${restaurant.address}</h4>

        <h3 class="desc-item__info">Categories</h3>
        <h4 class="desc-item__info-value">${categories}</h4>

        <p class="desc-item__desc">${restaurant.description}</p>
      </article>
      <article id="menus" class="detail-card" tabindex="0">
      </article>
      <article id="add-review" class="detail-card" tabindex="0">
      </article>
      <article id="reviews" class="detail-card" tabindex="0">
      </article>
    </div>
  `;
};


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
