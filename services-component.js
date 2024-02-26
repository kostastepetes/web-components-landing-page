class ServicesComponent extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
        .services {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 50px;
            background-color: #f9f9f9;
            height: 45vh;
          }
          
          .services .text-column {
            flex: 1;
            padding-right: 20px;
          }
          
          .services .image-column {
            flex: 1;
            display: flex;
            justify-content: center; /* Align content to the end of the column */
          }
          
          .services h2 {
            font-size: 2em;
            margin-bottom: 10px;
          }
          
          .services p {
            font-size: 1.2em;
            margin-bottom: 20px;
          }
          
          .services img {
            max-width: 100%;
            height: auto;
          }
          
        </style>
        <div class="services">
          <div class="text-column">
            <h2>Our Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et fringilla arcu. Sed vel efficitur dolor.</p>
            <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
            </ul>
          </div>
          <div class="image-column">
            <img src="services-image.jpg" alt="Services Image">
          </div>
        </div>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('services-component', ServicesComponent);
  