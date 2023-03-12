import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import '../component/skip-to-content';

class App {
  constructor({
    button, drawer, content, loader,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._loader = loader;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    this._loader.style.display = '';
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    this._loader.style.display = 'none';
  }
}

export default App;
