class ContactFormComponent extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Styles for contact form */
          .contact-form {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
          }

          .contact-form h1 {
            text-align: center;
            margin-bottom: 20px;
          }
  
          .contact-form label {
            display: block;
            margin-bottom: 10px;
          }
  
          .contact-form input[type="text"],
          .contact-form input[type="email"],
          .contact-form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
  
          .contact-form textarea {
            height: 150px;
          }
  
          .contact-form button {
            display: block;
            margin: 0 auto;
            padding: 10px 20px;
            background-color: black;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
  
          .contact-form button:hover {
            background-color: white;
            color: black;
            border: 1px solid black;
          }
        </style>
        <div class="contact-form" id="contact">
          <form>
          <h1>Contact Us</h1>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
  
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
  
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
  
            <button type="submit">Submit</button>
          </form>
        </div>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
  
      // Add event listener for form submission
      this.shadowRoot.querySelector('form').addEventListener('submit', this.handleSubmit.bind(this));
    }
  
    // Method to handle form submission
    handleSubmit(event) {
      event.preventDefault();
      // Retrieve form data
      const formData = new FormData(event.target);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
      // You can perform further actions here, such as sending the data to a server
      console.log('Form data:', formDataObject);
      // Reset form fields
      event.target.reset();
    }
  }
  
  customElements.define('contact-form-component', ContactFormComponent);
  