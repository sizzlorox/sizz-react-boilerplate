require('./src/main.scss');
import { BrowserRouter } from 'react-router-dom';

// Main Component
import App from './src/App';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'), (err) => console.log(err));


if ('serviceWorker' in navigator
  && window.location.protocol === 'https:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
if (module.hot) {
  module.hot.accept();
}
