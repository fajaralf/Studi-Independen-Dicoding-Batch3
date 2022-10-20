import FavoriteRestaurantIDB from '../data/restaurant-idb';

import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';
import { getElement } from './element';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this.likeButtonContainer = likeButtonContainer;
    this.restaurant = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.restaurant;

    if (await this.isRestaurantExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIDB.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = getElement('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIDB.putRestaurant(this.restaurant);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = getElement('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIDB.deleteRestaurant(this.restaurant.id);
      this.renderButton();
    });
  },
};

export default LikeButtonInitiator;
