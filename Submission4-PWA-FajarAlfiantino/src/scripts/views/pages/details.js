import RestaurantData from '../../data/restaurant-data';
import UrlParser from '../../routes/url-parser';
import { getElement } from '../../utils/element';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-review';
import detailComponent from '../templates/detail-component';
import reviewComponent from '../templates/review-component';

const Detail = {
  async render() {
    return `
        <div class="resto-details" id="list">
          <section class="resto-info"></section>
          <section class="resto-review"></section>
          <div id="likeButtonContainer"></div>
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantData.detailRestaurantData(url.id);
    const container = getElement('section.resto-info');
    container.innerHTML = detailComponent(restaurant);
    reviewComponent(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: getElement('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });

    const submitReview = getElement('#submit-review');
    const reviewName = getElement('#inputName');
    const reviewContent = getElement('#inputReview');

    submitReview.addEventListener('click', async (e) => {
      e.preventDefault();
      await PostReview(url, reviewName.value, reviewContent.value);

      reviewName.value = '';
      reviewContent.value = '';
    });
  },
};

export default Detail;
