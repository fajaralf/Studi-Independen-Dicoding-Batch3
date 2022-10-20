import { createElement, getElement } from '../../utils/element';

class Page extends HTMLElement {
  constructor({ basePageElement, contentElement }) {
    super();
    this.basePageElement = basePageElement;
    this.contentElement = contentElement;
  }

  connectedCallback() {
    this.render();
    this.contentElement = createElement(this.contentElement);
    this.contentContainer.appendChild(this.contentElement);
  }

  /**
   * @param {Object} data
   */
  set data(data) {
    this.datas = data;
    this.showContent();
  }

  render() {
    this.innerHTML = this.basePageElement;
    this.contentContainer = getElement('section.list');
  }

  /**
   * Show an error message
   * @param {string} message Error message to shown.
   */
  showMessage(message) {
    this.contentContainer.innerHTML = /* html */ `
    <div class="message">
    <p class="message-heading">Upss.. 😢</p>
    <p class="message-content">${message}</p>
    </div>
    `;
    console.log(message);
  }
}

export default Page;
