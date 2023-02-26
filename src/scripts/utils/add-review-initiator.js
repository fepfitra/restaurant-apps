import RestaurantsSource from "../data/restaurants-source";

const AddReviewInitiator = {
  init({id, inputName, inputReview, button }) {
    button.addEventListener('click', async () => {
      await RestaurantsSource.postReview({
        id: id,
        name: inputName.value,
        review: inputReview.value,
      });
      location.reload();
    });
  },
};

export default AddReviewInitiator;
