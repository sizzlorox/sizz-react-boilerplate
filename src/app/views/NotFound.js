/* eslint jsx-a11y/click-events-have-key-events: 0 */

import { Link } from 'react-router-dom';

// Components
import Footer from '../components/footer/Footer';

const NotFound = ({ history }) => (
  <section className={classnames('content')}>
    <div className={classnames('not-found')}>
      <h3>Don&apos;t Panic!</h3>
      <span>The page you visited does not exist.</span>
      <div className={classnames('not-found-btns')}>
        <Link className={classnames('hero-btn')} to="/">Home</Link>
        <button type="button" className={classnames('hero-btn')} onClick={history.goBack}>Back</button>
      </div>
    </div>
    <div className={classnames('not-found-body')}>
      <p>Think of something witty and beautiful to fill up this space!</p>
    </div>
    <Footer />
  </section>
);

NotFound.propTypes = {
  history: PropTypes.any.isRequired
};

export default NotFound;
