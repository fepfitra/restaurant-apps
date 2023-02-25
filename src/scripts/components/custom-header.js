class customHeader extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render({title = '', hamburger = '', navList}) {
    let navListHTML = '';
    navList.navListItem.forEach(item => {
      navListHTML += `
        <li class="nav__item"><a href="${item.href}">${item.value}</a></li>
      `;
    });
    this.shadowDOM.innerHTML = `
      ${this._style()}
      <header class="header">
        <h1 class="header__title">
          ${title}
        </h1>

        <button id="menu" class="header__menu">${hamburger}</button>

        <nav id="drawer" class="nav">
          <ul class="nav__list">
            ${navListHTML}
          </ul>
        </nav>
      </header>
    `;
  }
  _style() {
    return `
      <style>
        #menu{
          display: none;
          color: white;
          background-color: black;
          border: none;
        }

        .header {
          position: sticky;
          top: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background-color: rgba(0, 0, 0, 0.61);
          backdrop-filter: blur(10px);
          color: #ffffff;
          font-family: 'Open Sans', cursive;
          min-height: 80px;
        }

        .header__title {
          display: inline-block;
          font-size: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          padding: 1.5rem;
        }

        .nav {
          display: flex;
          justify-content: flex-end;
          padding-top: 2rem;
          padding-right: 2rem;
        }

        .nav__list {
          display: flex;
          list-style: none;
        }

        .nav__item {
          margin-left: 1rem;
        }

        a {
          height: 44px;
          width: 44px;
          color: #ffffff;
          text-decoration: none;
          transition: all 0.2s;
        }

        a:hover {
          color: #cccccc;
        }

        @media screen and (max-width: 768px) {
          .header{
            grid-template-columns: 1fr;
          }

          .header__title{
            margin: 10px auto;
            text-align: center;
            padding: 0;
          }

          #drawer {
            display: inline-block;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.61);
            top: 120px;
            backdrop-filter: blur(10px);
            transform: translate(-250px, 0);
            transition: transform 0.3s ease-in-out;
          }

          #drawer.open {
            transform: translate(0, 0);
          }

          ul {
            list-style: none;
            display: block;
            padding-left: 1rem;
          }

          li {
            height: 44px;
          }

          #menu {
            display: inline;
            text-align: center;
            margin: 10px auto;
            padding: 15px;
          }
        }
      </style>`;
  }
}

customElements.define('custom-header', customHeader);
