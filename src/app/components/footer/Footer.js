/* eslint react/jsx-one-expression-per-line: 0 */

import { Link } from 'react-router-dom';
import enumHelper from '../../utils/enumHelper';

export default () => (
  <div className={classnames('footer')}>
    <div className={classnames('footer-bg')}>
      <div className={classnames('footer-content')}>
        <div className={classnames('footer-sitemap')}>
          <p>Site Map</p>
          <hr />
          <ul>
            {enumHelper.views.map(view => (
              <li key={view.id}>
                <Link to={view.path}>{view.name}</Link>
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
