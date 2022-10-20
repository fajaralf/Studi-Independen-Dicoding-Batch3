import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import { getElement } from '../utils/element';

class App {
  constructor({ content }) {
    this.content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = getElement('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      getElement('#content').focus();
    });
  }
}

export default App;
