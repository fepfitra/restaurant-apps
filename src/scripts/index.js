import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import swRegister from './utils/sw-register';
import App from './views/app';

const navList = [
  {
    value: 'Home',
    href: '#/list',
  },
  {
    value: 'Favorite',
    href: '#',
  },
  {
    value: 'About Us',
    href: 'https://www.linkedin.com/in/fitra-fep-417049199/',
  },
];

const app = new App({
  skipToContent: {
    component: document.querySelector('skip-to-content'),
    href: '#maincontent',
    value: 'Skip to Content',
  },
  header: {
    component: document.querySelector('custom-header'),
    title: 'Night City Food',
    menu: '☰',
    navList: navList,
  },
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
