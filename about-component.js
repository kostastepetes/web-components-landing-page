class AboutComponent extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
        .about {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 50px;
            background-color: #f9f9f9;
            height: 45vh;
          }
          
          .about .text-column {
            flex: 1;
            padding-right: 20px;
          }
          
          .about .image-column {
            flex: 1;
            display: flex;
            justify-content: center; /* Align content to the end of the column */
          }
          
          .about h2 {
            font-size: 2em;
            margin-bottom: 10px;
          }
          
          .about p {
            font-size: 1.2em;
            margin-bottom: 20px;
          }
          
          .about img {
            max-width: 100%;
            height: auto;
          }
          
        </style>
        <div class="about">
          <div class="text-column">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et fringilla arcu. Sed vel efficitur dolor.</p>
          </div>
          <div class="image-column">
            <img src="about-image.jpg" alt="About Image">
          </div>
        </div>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('about-component', AboutComponent);
  