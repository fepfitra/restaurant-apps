import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import '../components/skip-to-content';
import '../components/custom-header';

class App {
  constructor({ skipToContent, header }) {
    this._skipToContent = skipToContent;
    this._header = header;
    
    this._initialSkipToContent();
    this._initialHeader();
  } 

  _initialSkipToContent() {
    const { component, value, href } = this._skipToContent;
    component.render({
      href:href,
      value:value
    });
  }

  _initialHeader() {
    const {component, title, hamburger, navList} = this._header;
    component.render({
      title: title,
      hamburger: hamburger,
      navList: navList,
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
