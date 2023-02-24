import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';

const Detail = {
  async render() {
    return `
      <h2>Detail Page>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    console.log(url);
    const restaurant = await RestaurantsSource.detailRestaurant(url.id);
    console.log(restaurant);
  },
};

export default Detail;
