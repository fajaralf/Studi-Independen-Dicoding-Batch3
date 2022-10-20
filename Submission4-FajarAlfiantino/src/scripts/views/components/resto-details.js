/* eslint-disable max-len */
import { createElement } from '../../utils/index';

class RestoDetails extends HTMLElement {
  connectedCallback() {
    this.renderSkeleton();
  }

  set details(details) {
    this.detail = details;
    this.render();
  }

  renderSkeleton() {
    this.innerHTML = `
    <div class="description skeleton">
        <div class="skeleton-head"></div>
        <div class="desc-content">
          <div class="skeleton-body"></div>
          <div class="skeleton-body"></div>
        </div>
      </div>
      
      <div class="info">
        <div class="main-info">
          <div class="skeleton-head"></div>
          <div class="skeleton-body"></div>
        </div>
        <div class="resto-menus">
          <div class="skeleton-head"></div>
          <div class="menus">
            <div class="skeleton-body"></div>
            <div class="skeleton-body"></div>
          </div>
        </div>
      </div>
    `;
  }

  render() {
    const { name, description, city, address, pictureId, categories, menus, rating, customerReviews } = this.detail;

    this.innerHTML = '';

    const mainInfoElement = createElement('resto-info');
    this.appendChild(mainInfoElement);

    const reviewElement = createElement('resto-review');
    this.appendChild(reviewElement);

    this.favButton = createElement('button');
    this.favButton.id = 'fav-button';
    this.appendChild(this.favButton);

    mainInfoElement.mainInfo = {
      name,
      city,
      address,
      pictureId,
      rating,
      description,
      categories,
      menus,
    };

    reviewElement.reviews = customerReviews;
  }

  // set favButtonState(_isFavorited) {
  //   const icon = _isFavorited ? '×' : '+';
  //   const label = _isFavorited
  //     ? 'Hapus restaurant ini dari daftar favorite Anda'
  //     : 'Tambahkan restaurant ini ke daftar favorite Anda';

  //   this._favButton.textContent = icon;
  //   this._favButton.ariaLabel = label;
  //   this._favButton.title = label;
  // }
}

customElements.define('resto-details', RestoDetails);
