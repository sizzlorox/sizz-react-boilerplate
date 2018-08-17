export default () => {
  return (
    <div className={classnames('footer')}>
      <div className={classnames('footer-bg')}>
        <div className={classnames('footer-content')}>
          <div className={classnames('footer-sitemap')}>
            <p>Site Map</p>
            <hr />
            <ul>
              <li>
                Home
              </li>
              <li>
                404
              </li>
            </ul>
          </div>
          <div>
            <p>Contact Us</p>
            <hr />
            Email: sizzlorox@gmail.com
            <br />
            Phone: (XX) XXXX-XXXX
          </div>
        </div>
        <p className={classnames('footer-copyright')}>Copyright © {new Date().getFullYear()} Something something</p>
      </div>
    </div>
  );
};