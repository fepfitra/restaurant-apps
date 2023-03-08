import RestaurantsSource from '../data/restaurants-source';

const AddReviewInitiator = {
  init({
    id, inputName, inputReview, submitButton, reviewsContainer
  }) {
    submitButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const data = await RestaurantsSource.postReview({
        id,
        name: inputName.value,
        review: inputReview.value,
      });

      reviewsContainer.innerHTML = data.customerReviews.map((customerReview) => `     
        <div class="reviews__item">
          <h2 class="reviews__name">${customerReview.name}</h2>
          <h3 class="reviews__date">${customerReview.date}</h3>
          <p class="reviews__review">${customerReview.review}</p>
        </div>
      `);
    });
  },
};

export default AddReviewInitiator;
