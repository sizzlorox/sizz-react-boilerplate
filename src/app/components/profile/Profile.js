// Components
import LazyLoad from 'react-lazyload';
import Loading from '../loading/Loading';

// Assets
const Avatar = require('../../assets/images/avatar.jpeg');

const Profile = ({ github, children }) => (
  <div className={classnames('profile')}>
    <LazyLoad offset={100} placeholder={<Loading className={classnames('placeholder')} />} once>
      <img src={Avatar} alt="Profile" />
    </LazyLoad>
    <p>{children}</p>
    {github ? <a href={github}>Github Page</a> : ''}
  </div>
);

Profile.defaultProps = {
  github: undefined
};

Profile.propTypes = {
  github: PropTypes.string,
  children: PropTypes.string.isRequired
};

export default Profile;
