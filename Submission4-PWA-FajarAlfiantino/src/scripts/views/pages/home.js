import RestaurantData from '../../data/restaurant-data';
import cardComponent from '../templates/post-component';
import '../components/index';
import { getElement } from '../../utils/element';

const Home = {
  async render() {
    return `
    <hero-element></hero-element>
        <section class="content">
          <div class="latest">
            <a href="#list">
              <h1>Explore Restaurant</h1>
            </a>
            <section id="list" class="resto-list"></section>
          </div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantData.getRestaurantData();
    const restaurantList = getElement('.resto-list');
    restaurants.forEach((item) => {
      restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
    });
  },
};

export default Home;
