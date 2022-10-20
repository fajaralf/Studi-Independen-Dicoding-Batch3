import Presenter from './presenter';

class RestoListPresenter extends Presenter {
  constructor({ view, model }) {
    super({ view, model });
  }

  async showContent() {
    try {
      const allRestoList = await this.models.getAllResto();
      allRestoList.length > 0 ? this.displayContent(allRestoList) : this.displayMessage('Daftar restaurant kosong');
    } catch (error) {
      this.displayMessage(error.message);
    }
  }
}

export default RestoListPresenter;
