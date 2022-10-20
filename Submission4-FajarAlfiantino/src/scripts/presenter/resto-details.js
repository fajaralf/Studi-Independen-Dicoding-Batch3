/* eslint-disable max-len */
import { getElement } from '../utils/index';
import UrlParser from '../routes/url-parser';
import Presenter from './presenter';
import '../data/favorite-resto-idb';

class RestoDetailPresenter extends Presenter {
  constructor({ view, model }) {
    super({ view, model });
    this.formSubmitHandler = this._onFormSubmit.bind(this);
    this.favButtonHandler = this._onFavButtonClick.bind(this);
  }

  async showContent() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const { detail, favorite } = this.models;
      this.restoDetails = await detail.getRestoDetail(url.id);
      // this._isFavoriteResto = !!(await favorite.getResto(this._restoDetails.id));
      // console.log(favorite.getResto(this._restoDetails.id));
      this.displayContent(this.restoDetails);
    } catch (error) {
      this.views.showMessage(error.message);
    }
  }

  displayContent(content) {
    super.displayContent(content);
    this.views._formSubmitHandler = this.formSubmitHandler;
    this.views._favButtonHandler = this.favButtonHandler;
    this.views.favButtonState(this._isFavoriteResto);
  }

  /**
   *
   * @param {Event} event
   */
  async _onFormSubmit(event) {
    event.preventDefault();

    try {
      this.views.showLoadingInSubmitButton();

      const reviewForm = getElement('#review-form');
      const formData = new FormData(reviewForm);
      const reviewData = {
        id: this._restoDetails.id,
        name: formData.get('name'),
        review: formData.get('review'),
      };

      const response = await this.models.detail.addReview(reviewData);

      this.views.showNewReviews(response);
      reviewForm.reset();
    } catch (error) {
      this.views.showSnackBar(error.message);
    } finally {
      this.views.showLoadingInSubmitButton(false);
    }
  }

  /**
   *
   * @param {Event} event
   */
  async _onFavButtonClick(event) {
    event.stopPropagation();
    const { id, name, description, pictureId, city, rating } = this.restoDetails;

    this.isFavoriteResto
      ? await this._removeFromFavorite(id)
      : await this._addToFavorite({
          id,
          name,
          description,
          pictureId,
          city,
          rating,
        });

    this.isFavoriteResto = !this.isFavoriteResto;
    this.views.favButtonState(this.isFavoriteResto);

    if (process.env.NODE_ENV === 'development') {
      getElement('resto-details').dispatchEvent(new Event('fav-btn:updated'));
    }
  }

  async _addToFavorite(restaurant) {
    await this.models.favorite.putResto(restaurant);
    this.views.showSnackBar('Restaurant berhasil ditambahkan ke favorite');

    if (process.env.NODE_ENV === 'development') {
      getElement('resto-details').dispatchEvent(new Event('snackbar:updated'));
    }
  }

  async _removeFromFavorite(id) {
    await this.models.favorite.deleteResto(id);
    this.views.showSnackBar('Restaurant berhasil dihapus dari favorite');

    if (process.env.NODE_ENV === 'development') {
      getElement('resto-details').dispatchEvent(new Event('snackbar:updated'));
    }
  }
}

export default RestoDetailPresenter;
