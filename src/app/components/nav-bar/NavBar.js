import { NavLink } from 'react-router-dom';
import enumHelper from '../../utils/enumHelper';

export default () => (
  <div className={classnames('nav-bar')}>
    {enumHelper.views.map(
      view => <NavLink key={view.id} className={classnames('link')} exact to={view.path} activeClassName="is-active">{view.name}</NavLink>
    )}
  </div>
);
