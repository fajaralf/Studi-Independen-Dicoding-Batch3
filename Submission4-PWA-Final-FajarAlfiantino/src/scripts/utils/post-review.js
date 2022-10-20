/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import RestaurantSource from '../data/restaurant-data';
import { getElement } from './element';

const PostReview = async (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  const reviewContainer = getElement('.review-container');
  const reviewItemContainer = getElement('.review-item');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
  <li class="review-item">
  <div class="review-content">
  <p class="review-name">${name}</p>
  <p class="review-date">${date}</p>
  <p>${review}</p>
  </div>
  </li>
	`;

  const reviewResponse = await RestaurantSource.postRestaurantReview(dataInput);

  reviewContainer.innerHTML += newReview;
};

export default PostReview;
