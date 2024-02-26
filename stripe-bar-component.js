class StripeBarComponent extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Styles for stripe bar */
          .stripe-bar {
            background-color: gray;
            color: #fff;
            padding: 15px 20px;
            text-align: center;
          }
  
          .stripe-bar p {
            margin: 0;
            font-size: 1.2em;
          }
  
          .stripe-bar button {
            padding: 10px 20px;
            font-size: 1.1em;
            background-color: black;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 30px;
            margin-top: 10px;
          }
  
          .stripe-bar button:hover {
            background-color: white;
            color: black;
          }
        </style>
        <div class="stripe-bar">
          <p>Stripe Bar Text</p>
          <button>CTA Button</button>
        </div>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('stripe-bar-component', StripeBarComponent);
  