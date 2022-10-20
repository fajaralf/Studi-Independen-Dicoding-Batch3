/* eslint-disable no-plusplus */
import { createElement } from '../../utils/element';
import '../../data/resto-data-source';
import '../../presenter/resto-list';

class RestoList extends HTMLElement {
  connectedCallback() {
    this.renderSkeleton();
  }

  /**
   * @param {Array} restoList An array data to iterate.
   */
  set restoList(restoList) {
    this.renderRestoList(restoList);
    console.log(restoList);
  }

  renderSkeleton() {
    const numberItemSkeleton = 6;
    for (let index = 0; index < numberItemSkeleton; index++) {
      const restoItemElement = createElement('resto-item');
      restoItemElement.renderSkeleton();
      this.appendChild(restoItemElement.firstElementChild);
    }
  }

  renderRestoList(restoList) {
    this.innerHTML = '';
    restoList.forEach((resto) => {
      const restoItemElement = createElement('resto-item');
      restoItemElement.restoData = resto;
      this.appendChild(restoItemElement.firstElementChild);
    });
  }
}

customElements.define('resto-list', RestoList);
