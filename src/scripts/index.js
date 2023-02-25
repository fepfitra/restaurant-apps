import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  skipToContent: {
    component: document.querySelector('skip-to-content'),
    href: '#maincontent',
    value: 'Skip to Content',
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
