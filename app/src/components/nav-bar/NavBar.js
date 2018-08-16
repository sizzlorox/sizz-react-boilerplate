import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <div className={classnames('nav-bar')}>
      <NavLink className={classnames('link')} exact to='/' activeClassName='is-active'>Home</NavLink>
      <NavLink className={classnames('link')} exact to='/some-page-that-doesnt-exist' activeClassName='is-active'>404 Page</NavLink>
    </div>
  );
};