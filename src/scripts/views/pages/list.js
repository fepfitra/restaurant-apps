import RestaurantsSource from "../../data/restaurants-source";

const List = {
  async render() {
    // return `
    //   <h2>List Page</h2>
    // `
    return `
      <div class="hero">
        <h1 class="hero__title">Explore your food fantasy</h1>
        <p class="hero__tagline">Be a lucky person who try our amazing food world</p>
      </div>

      <section class="content">
        <div class="restos">
          <h1 class="restos__label">Available Restos</h1>
          <div class="posts" id="maincontent" tabindex="0">

          </div>
        </div>
      </section>
    `
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.list();
    console.log(restaurants);
  },
};

export default List;
