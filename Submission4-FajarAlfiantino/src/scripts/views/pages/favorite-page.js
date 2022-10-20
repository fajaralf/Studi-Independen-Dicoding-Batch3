import Page from './page';

class FavoritePage extends Page {
  constructor() {
    super({
      basePageElement: /* html */ `
        <section id="/list" class="list">
          <h1>Daftar Resturant Favorite</h1>
        </section>
      `,
      contentElement: 'resto-list',
    });
  }

  showContent() {
    this.contentElement.restoList = this.datas;
  }
}

customElements.define('favorite-page', FavoritePage);
