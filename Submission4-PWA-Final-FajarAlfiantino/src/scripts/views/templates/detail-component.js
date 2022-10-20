import API_ENDPOINT from '../../global/api-endpoint';

const detailComponent = (restaurant) => `
<article class="description">
        <h1>${restaurant.name}</h1>
        <div class="desc-content">
          <div class="thumbnail">
            <div class="resto-img">
              <img
                src="${API_ENDPOINT.RESTAURANT_IMAGE}${restaurant.pictureId}"
                alt="Gambar restaurant ${restaurant.name}">
            </div>
          </div>
          <p>${restaurant.description}</p>
        </div>
      </article>
      <section class="info">
        <article class="main-info">
          <h2>Informasi</h2>
          <h3>Alamat</h3>
          <p>${restaurant.address}</p>
          <h3>Kota</h3>
          <p>${restaurant.city}</p>
          <h3>Rating</h3>
          <p>${restaurant.rating}</p>
        </article>
        <article class="resto-menus">
          <h2>Daftar Menu</h2>
          <div class="menus">
            <div>
              <h3>Makanan</h3>
              <ul>
                ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
              </ul>
            </div>
            <div>
              <h3>Minuman</h3>
              <ul>
                ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
              </ul>
            </div>
          </div>
        </article>
      </section>
`;

export default detailComponent;
