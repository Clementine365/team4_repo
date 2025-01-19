export function renderHeader() {
    const header = document.querySelector('header');
    header.innerHTML = `
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/product-listing.html">Products</a></li>
          <li><a href="/about.html">About</a></li>
        </ul>
      </nav>
    `;
  }
  
  export function renderFooter() {
    const footer = document.querySelector('footer');
    footer.innerHTML = `
      <p>&copy; ${new Date().getFullYear()} Our Store. All rights reserved.</p>
    `;
  }