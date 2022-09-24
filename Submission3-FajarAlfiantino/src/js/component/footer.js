class Footer extends HTMLElement {
  // constructor() {
  //   super();
  //   this.shadowDOM = this.attachShadow({ mode: "open" });
  // }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <h4 class="text-white text-center bg-dark pt-2 pb-2">RateMovie &copy; 2022, Fajar Alfiantino</h4>
      `;
  }
}
customElements.define("footer-bar", Footer);
