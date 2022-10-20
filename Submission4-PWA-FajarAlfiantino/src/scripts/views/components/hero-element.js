class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <div class="hero">
    <div class="heroinner">
      <h1 class="herotitle">RestoFind</h1>
      <p class="herosubtitle">Find the best restaurants only on the best websites.</p>
    </div>
  </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
