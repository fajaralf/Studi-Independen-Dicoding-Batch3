/* eslint-disable class-methods-use-this */
import Page from './page';

class HomePage extends Page {
  constructor() {
    super({
      /* html */
      basePageElement: `
        <hero-element></hero-element>
        <section class="content">
          <div class="latest">
            <a href="#/list">
              <h1>Explore Restaurant</h1>
            </a>
            <section id="/list" class="list"></section>
          </div>
        </section>
        `,
      contentElement: 'resto-list',
    });
  }

  showContent() {
    this.contentElement.restoList = this.datas;
  }
}

customElements.define('home-page', HomePage);
