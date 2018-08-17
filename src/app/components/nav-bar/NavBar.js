import { NavLink } from 'react-router-dom'
import enumHelper from '../../utils/enumHelper';

export default () => {
  return (
    <div className={classnames('nav-bar')}>
      {enumHelper.views.map((view, index) => <NavLink key={index} className={classnames('link')} exact to={view.path} activeClassName='is-active'>{view.name}</NavLink>)}
    </div>
  );
};