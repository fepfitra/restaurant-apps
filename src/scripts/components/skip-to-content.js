class skipToContent extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render({href = '', value = ''}) {
    console.log(value);
    this.shadowDOM.innerHTML = `
      ${this._style()}
      <a href="${href}" class="skip-link">${value}</a>
    `;
  }

  _style() {
    return `
      <style>
        .skip-link {
          position: absolute;
          color: white;
          z-index: 1;
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
      </style>`;
  }
}

customElements.define('skip-to-content', skipToContent);
