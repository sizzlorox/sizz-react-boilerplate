import { Switch, Route } from 'react-router-dom';

// Components
import NavBar from './components/nav-bar/NavBar';

// Views
import Home from './views/Home';
import NotFound from './views/NotFound';

// Stateless Main Component with React-Router
export default () => (
  <React.Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </React.Fragment>
);
