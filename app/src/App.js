import { Switch, Route } from 'react-router-dom';

// Components
import Header from './components/header/Header';
import NavBar from './components/nav-bar/NavBar';

// Views
import Home from './views/Home';

// Stateless Main Component with React-Router
export default () => {
  return (
    <React.Fragment>
      <Header title='Minimal React w/ Webpack' smallTitle='Boilerplate' />
      <NavBar />
      <div className={classnames('content')}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Home} />
        </Switch>
      </div>
    </React.Fragment>
  )
};
