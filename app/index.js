require('./src/main.scss');
import { BrowserRouter } from 'react-router-dom';

// Main Component
import App from './src/App';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'), (err) => console.log(err));

if (module.hot) {
  module.hot.accept();
}