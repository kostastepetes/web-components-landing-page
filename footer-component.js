class FooterComponent extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Styles for footer */
          .footer {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
          }
  
          .footer p {
            margin-bottom: 20px;
          }
  
          .footer a {
            color: #fff;
            text-decoration: none;
            margin: 0 10px;
          }
  
          .footer .logo {
            display: inline-block;
            vertical-align: middle;
            margin-right: 20px;
          }
  
          .footer .sitemap {
            display: inline-block;
            vertical-align: middle;
          }
  
          .footer .sitemap ul {
            list-style-type: none;
            padding: 0;
          }
  
          .footer .sitemap li {
            display: inline;
            margin-right: 10px;
            text-decoration: underline;
          }
        </style>
        <footer class="footer">
          <div class="logo">
            <img src="logo.png" alt="Logo" height="30">
          </div>
          <div class="sitemap">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <p>&copy; 2024 Your Website. All rights reserved.</p>
          <nav>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </nav>
        </footer>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('footer-component', FooterComponent);
  