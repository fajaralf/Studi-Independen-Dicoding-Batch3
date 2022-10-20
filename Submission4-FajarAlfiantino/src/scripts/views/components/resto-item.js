import config from '../../global/config';

class RestoItem extends HTMLElement {
  /**
   * @param {Object} data an Object data to render
   */
  set restoData(data) {
    this.restoDatas = data;
    this.render();
  }

  renderSkeleton() {
    this.innerHTML = `
    <div class="resto-item skeleton">
    <div class="resto-thumbnail">
      <div class="skeleton-body"></div>
    </div>
    <div class="resto-content">
      <div class="skeleton-head"></div>
      <div class="sm skeleton-body"></div>
    </div>
  </div>
    `;
  }

  render() {
    const { id, pictureId, name, rating, city, description } = this.restoDatas;

    this.innerHTML = `
      <article class="resto-item">
        <div class="resto-thumbnail">
          <img
            class="lazyload"
            src="${config.SMALL_BASE_IMAGE_URL}${pictureId}" 
            alt="Gambar restaurant ${name}">
          <p class="resto-rating">⭐ ${rating}</p>
          <p class="resto-city">🏠 ${city}</p>
        </div>
        <div class="resto-content">
          <a href="/#/detail/${id}"
            class="resto-name">${name}</a>
          <p class="resto-description">${description}</p>
        </div>
      </article>
    `;
  }
}

customElements.define('resto-item', RestoItem);
