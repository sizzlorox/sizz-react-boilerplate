import { Link, withRouter } from 'react-router-dom';

// Components
import Footer from '../components/footer/Footer';

class NotFound extends React.Component {

  constructor(props) {
    super(props);
  }

  // TODO: add something to middle of NotFound hero and footer
  render() {
    return (
      <section className={classnames('content')}>
        <div className={classnames('not-found')}>
          <h3>Don't Panic!</h3>
          <span>The page you visited does not exist.</span>
          <div className={classnames('not-found-btns')}>
            <Link className={classnames('hero-btn')} to='/'>Home</Link>
            <a className={classnames('hero-btn')} onClick={this.props.history.goBack}>Back</a>
          </div>
        </div>
        <div className={classnames('not-found-body')}>
          <p>Think of something witty and beautiful to fill up this space!</p>
        </div>
        <Footer />
      </section>
    );
  }

}
export default NotFound;