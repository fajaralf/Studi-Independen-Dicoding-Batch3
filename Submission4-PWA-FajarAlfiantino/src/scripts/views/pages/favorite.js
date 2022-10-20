import RestaurantDataIDB from '../../data/restaurant-idb';
import cardComponent from '../templates/post-component';
import { getElement } from '../../utils/element';

const Favorite = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
    <a href="#/favorite">
              <h1>Favorite Restaurant</h1>
            </a>
    <section class="resto-list"></section>        
    </div>
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDataIDB.getAllRestaurants();
    const restaurantList = getElement('section.resto-list');
    restaurants.forEach((item) => {
      restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
    });
  },
};

export default Favorite;
