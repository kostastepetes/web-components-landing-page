class HeroBannerComponent extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Styles for hero banner */
          .hero-banner {
            background-color: #f2f2f2;
            padding: 50px;
            text-align: center;
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
  
          .hero-banner h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
          }
  
          .hero-banner p {
            font-size: 1.2em;
            margin-bottom: 30px;
          }
  
          .hero-banner button {
            padding: 10px 0;
            width: 10vw; 
            font-size: 1.1em;
            background-color: black;
            color: #fff;
            border: none;
            cursor: pointer;
            border-radius: 30px;
            margin: 20px auto 0;
          }
  
          .hero-banner button:hover {
            background-color: white;
            color: black;
            border: 1px solid black;
          }
        </style>
        <div class="hero-banner">
          <h1>Hero Banner Header</h1>
          <p>Subheader text goes here</p>
          <button>CTA Button</button>
        </div>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('hero-banner-component', HeroBannerComponent);
  