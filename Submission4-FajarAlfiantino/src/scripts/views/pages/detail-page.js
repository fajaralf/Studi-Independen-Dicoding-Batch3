// import { createElement, getElement } from '../../utils/index';
import { getElement, createElement } from '../../utils';
import Page from './page';

class DetailPage extends Page {
  constructor() {
    super({
      basePageElement: /* html */ `
        <section id="/list" class="list"></section>
      `,
      contentElement: 'resto-details',
    });
  }

  showContent() {
    this.contentElement.details = this.datas;
  }

  set formSubmitHandler(formSubmitHandler) {
    this._formSubmitHandler = formSubmitHandler;
    this.createFormSubmitHandler();
  }

  createFormSubmitHandler() {
    const reviewForm = getElement('#review-form');
    reviewForm.addEventListener('submit', this._formSubmitHandler);
  }

  showLoadingInSubmitButton(isShown = true) {
    const loadingIndicator = getElement('.btn-loading');
    loadingIndicator.style.display = isShown ? 'inline-block' : 'none';
  }

  showNewReviews(customerReviews) {
    const restoReviewElement = getElement('resto-review');
    restoReviewElement.reRenderReviewElement(customerReviews);
  }

  showSnackBar(message) {
    const messageElement = createElement('div');
    messageElement.id = 'snackbar';
    messageElement.textContent = message;
    this.appendChild(messageElement);
    messageElement.className = 'show';
    setTimeout(() => {
      messageElement.classList.remove('show');
      messageElement.remove();
    }, 3000);
  }
}

customElements.define('detail-page', DetailPage);
