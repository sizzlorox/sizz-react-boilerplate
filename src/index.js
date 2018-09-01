import { BrowserRouter } from 'react-router-dom';

// Main Component
import App from './app/App';

require('./app/main.scss');

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));

if ('serviceWorker' in navigator
  && window.location.protocol === 'https:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
if (module.hot) {
  module.hot.accept();
}
