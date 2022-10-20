class Presenter {
  constructor({ view, model }) {
    this.views = view;
    this.models = model;
  }

  get view() {
    return this.views;
  }

  displayContent(content) {
    this.views.data = content;
  }

  displayMessage(message) {
    this.views.showMessage(message);
  }
}

export default Presenter;
