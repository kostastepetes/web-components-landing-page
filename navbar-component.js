class NavbarComponent extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Styles for navbar */
          .navbar {
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
          }
  
          .navbar ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            align-items: center; /* Align items vertically in the navbar */
          }
  
          .navbar li {
            margin-right: 20px;
          }
  
          .navbar li:hover {
            text-decoration: underline;
          }
  
          .navbar a {
            text-decoration: none;
            color: #fff;
            cursor: pointer;
          }
  
          .logo {
            margin-right: 20px; /* Add spacing between logo and Home button */
          }
  
          .logo img {
            height: 30px; /* Adjust height of the logo image */
            vertical-align: middle; /* Align logo vertically with text */
          }
        </style>
        <nav class="navbar">
          <!-- Navbar content goes here -->
          <ul>
            <li class="logo"><img src="logo.png" alt="Logo"></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
  
      // Add event listeners to navbar links for scrolling behavior
      const navbarLinks = this.shadowRoot.querySelectorAll('.navbar a');
      navbarLinks.forEach(link => {
        link.addEventListener('click', this.scrollToSection.bind(this));
      });
    }
  
    // Method to scroll to the clicked section
    scrollToSection(event) {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        if ('scrollBehavior' in document.documentElement.style) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          const offsetTop = targetSection.offsetTop;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
        history.pushState(null, '', `#${targetId}`);
      }
    }
  }
  
  customElements.define('navbar-component', NavbarComponent);
  