/* eslint-disable comma-dangle */
/* eslint-disable indent */
import { getElement } from '../../utils/element';

const reviewComponent = (restaurant) => {
  const reviewer = getElement('section.resto-review');
  const filteredReview = restaurant.customerReviews.slice(0, 4);
  reviewer.innerHTML = `
  <h2>Review Pelanggan</h2>
  <ul class="review-container">
  ${filteredReview
    .map(
      (review) => `
      <li class="review-item">
      <div class="review-content">
      <p class="review-name">${review.name}</p>
      <p class="review-date">${review.date}</p>
      <p>${review.review}</p>
      </div>
      </li>`
    )
    .join('')}
  </ul>
  <section class="review-item">
        <form id="review-form" autocomplete="off">
          <input
            type="text"
            id="inputName"
            name="name"
            placeholder="Masukkan nama Kamu..."
            required>
          <textarea
            name="review"
            id="inputReview"
            placeholder="Masukkan review Kamu..."
            required></textarea>
          <button type="submit" aria-label="Submit review" id="submit-review">
            <span class="btn-loading"></span>
            <span>Submit</span>
          </button>
        </form>
      </section>
`;
};

export default reviewComponent;
