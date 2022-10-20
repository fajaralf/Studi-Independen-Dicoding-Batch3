/* eslint-disable quotes */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
import CONFIG from '../../global/config';

class RestoInfo extends HTMLElement {
  set mainInfo(mainInfo) {
    this.mainInfos = mainInfo;
    this.showMainInfo();
  }

  showMainInfo() {
    const { name, city, address, pictureId, rating, description, categories, menus } = this.mainInfos;

    const restoCategories = this.createList(categories);
    const restoFoodMenu = this.createList(menus.foods);
    const restodrinksMenu = this.createList(menus.drinks);

    this.innerHTML = `
    <article class="description">
        <h1>${name}</h1>
        <div class="desc-content">
          <div class="thumbnail">
            <div class="resto-img">
              <img
                src="${CONFIG.MEDIUM_BASE_IMAGE_URL}${pictureId}"
                alt="Gambar restaurant ${name}">
            </div>
          </div>
          <p>${description}</p>
        </div>
      </article>
      <section class="info">
        <article class="main-info">
          <h2>Informasi</h2>
          <h3>Alamat</h3>
          <p>${address}</p>
          <h3>Kota</h3>
          <p>${city}</p>
          <h3>Rating</h3>
          <p>${rating}</p>
          <h3>Ketegori Menu</h3>
          <ul>
            ${restoCategories}
          </ul>
        </article>
        <article class="resto-menus">
          <h2>Daftar Menu</h2>
          <div class="menus">
            <div>
              <h3>Makanan</h3>
              <ul>
                ${restoFoodMenu}
              </ul>
            </div>
            <div>
              <h3>Minuman</h3>
              <ul>
                ${restodrinksMenu}
              </ul>
            </div>
          </div>
        </article>
      </section>
    `;
  }

  createList(items) {
    let li = ``;
    items.forEach(({ name }) => {
      li += /* html */ `<li>${name}</li>`;
    });
    return li;
  }
}

customElements.define('resto-info', RestoInfo);
