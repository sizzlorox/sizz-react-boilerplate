import { Switch, Route } from 'react-router-dom';

// Components
import NavBar from './components/nav-bar/NavBar';

// Views
import Home from './views/Home';

// Stateless Main Component with React-Router
export default () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Home} />
      </Switch>
    </React.Fragment>
  )
};
