require('./src/main.scss');
import { BrowserRouter } from 'react-router-dom';

// Main Component
import App from './src/App';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'), (err) => console.log(err));

registerServiceWorker();
if (module.hot) {
  module.hot.accept();
}
