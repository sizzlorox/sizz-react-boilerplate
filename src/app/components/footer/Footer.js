import { NavLink } from 'react-router-dom'
import enumHelper from '../../utils/enumHelper';

export default () => {
  return (
    <div className={classnames('footer')}>
      <div className={classnames('footer-bg')}>
        <div className={classnames('footer-content')}>
          <div className={classnames('footer-sitemap')}>
            <p>Site Map</p>
            <hr />
            <ul>
              {enumHelper.views.map((view, index) => (
                <li>
                  <NavLink key={index} exact to={view.path}>{view.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Contact Us</p>
            <hr />
            Email: {enumHelper.contacts.email}
            <br />
            Phone: {enumHelper.contacts.phone}
          </div>
        </div>
        <p className={classnames('footer-copyright')}>Copyright © {new Date().getFullYear()} Something something</p>
      </div>
    </div>
  );
};