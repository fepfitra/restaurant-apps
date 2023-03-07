import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
  static async list() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postReview({ id, name, review }) {
    const container = document.getElementById('reviews');

    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    });
    const data = await response.json();
    container.innerHTML = data.customerReviews.map((customerReview) => {
      return  `     
      <div class="reviews__item">
        <h2 class="reviews__name">${customerReview.name}</h2>
        <h3 class="reviews__date">${customerReview.date}</h3>
        <p class="reviews__review">${customerReview.review}</p>
      </div>
    `;
    })
    return data;
  }
}

export default RestaurantsSource;
