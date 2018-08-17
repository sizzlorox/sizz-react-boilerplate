// Components
import LazyLoad from 'react-lazyload';
import Loading from '../loading/Loading';

export default ({ github, children }) => {
  return (
    <div className={classnames('profile')}>
      <LazyLoad offset={100} placeholder={<Loading />} once>
        <img src={require('../../assets/images/avatar.jpeg')} alt='Profile Image' />
      </LazyLoad>
      <p>{children}</p>
      {github ? <a href={github}>Github Page</a> : ''}
    </div>
  );
};