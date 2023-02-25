import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import '../components/skip-to-content';

class App {
  constructor({ skipToContent, header, button, drawer, content }) {
    this._skipToContent = skipToContent;
    this._header = header;
    console.log(header);
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    
    this._initialSkipToContent();
    this._initialHeader();
    this._initialAppShell();
  } 

  _initialSkipToContent() {
    const { component, value, href } = this._skipToContent;
    component.render({
      href:href,
      value:value
    });
  }

  _initialHeader() {
    const {component, title, menu, navList} = this._header;
    component.render({
      title: title,
      menu: menu,
      navList: navList,
    });
  }

  _initialAppShell() { 
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
