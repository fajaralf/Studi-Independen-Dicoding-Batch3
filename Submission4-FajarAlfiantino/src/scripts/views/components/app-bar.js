class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- site-navbar start -->
    <div class="navbar-area">
      <div class="container">
        <nav class="site-navbar id="site-navbar">
        <!-- nav-toggler for mobile version only -->
        <button class="nav-toggler" id="nav-toggler">
          <span></span>
        </button>

          <!-- site logo -->
          <a href="" class="site-logo">RestoFind</a>
  
          <!-- site menu/nav -->
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://linkedin.com/in/fajaralfiantino/" target="_blank">About Us</a></li>
          </ul>
        </nav>
      </div>
    </div><!-- navbar-area end -->
            `;
  }
}

customElements.define('app-bar', AppBar);
