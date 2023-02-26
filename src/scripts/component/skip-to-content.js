class skipToContent extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._href = this.getAttribute('href') || null;
    this._value = this.getAttribute('value') || null;

    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .skip-link {
          position: absolute;
          color: white;
          z-index: 3;
          top: -40px;
          left: 0;
          text-decoration: none;
          font-size: 1rem;
          font-family: 'Open Sans', sans-serif;
          padding: 10px;
        }
        .skip-link:focus {
          top: 0;
        }
      </style>
      <a href="${this._href}" class="skip-link">${this._value}</a>
    `;
  }
}

customElements.define('skip-to-content', skipToContent);
