import CONFIG from '../../global/config';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <div class="hero">
    <picture>
    <source type="image/webp" media="(max-width: 600px)" srcset="${CONFIG.IMAGE_HERO_SMALL_PATH}.webp">
    <source type="image/jpeg" media="(max-width: 600px)" srcset="${CONFIG.IMAGE_HERO_SMALL_PATH}.jpg">
    <source type="image/webp" media="(min-width: 601px)" srcset="${CONFIG.IMAGE_HERO_LARGE_PATH}.webp">
    <source type="image/jpeg" media="(min-width: 601px)" srcset="${CONFIG.IMAGE_HERO_LARGE_PATH}.jpg">
    <img data-src="${CONFIG.IMAGE_HERO_PATH}.jpg" alt="HERO" class="lazyload">
    </picture>
    <div class="heroinner">
      <h1 class="herotitle">RestoFind</h1>
      <p class="herosubtitle">Find the best restaurants only on the best websites.</p>
    </div>
  </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
