import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({ contentContainer }) {
    this.contentContainer = contentContainer;
  }

  async renderContent() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    if (url !== '/list') {
      window.scrollTo(0, 0);

      const presenter = routes[url]();
      const contentElement = presenter.view;

      this.contentContainer.innerHTML = '';
      this.contentContainer.appendChild(contentElement);
      await presenter.showContent();
    }
  }
}

export default App;
