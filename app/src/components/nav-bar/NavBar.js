import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <div className={classnames('nav-bar')}>
      <ul>
        <NavLink exact to='/' activeClassName='is-active'>Home</NavLink>
        <NavLink exact to='/some-page-that-doesnt-exist' activeClassName='is-active'>404 Page</NavLink>
      </ul>
    </div>
  );
};