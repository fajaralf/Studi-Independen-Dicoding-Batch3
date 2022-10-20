import API_ENDPOINT from '../../global/api-endpoint';

const postComponent = (cardItem) => `
<article class="resto-item">
<div class="resto-thumbnail">
  <img
    class="lazyload"
    src="${API_ENDPOINT.RESTAURANT_IMAGE + cardItem.pictureId}" 
    alt="Gambar restaurant ${cardItem.name}">
  <p class="resto-rating">⭐ ${cardItem.rating}</p>
  <p class="resto-city">🏠 ${cardItem.city}</p>
</div>
<div class="resto-content">
  <a href="#/detail/${cardItem.id}"
    class="resto-name">${cardItem.name}</a>
  <p class="resto-description">${cardItem.description}</p>
</div>
</article>
`;

export default postComponent;
