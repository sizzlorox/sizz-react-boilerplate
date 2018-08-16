// Components
import LazyLoad from 'react-lazyload';
import Loading from '../loading/Loading';

export default ({ cardTitle, children }) => {
  return (
    <LazyLoad offset={100} placeholder={<Loading />} once>
      <div className={classnames('card')}>
        <div className={classnames('front')}>
          <p>{cardTitle}</p>
        </div>
        <div className={classnames('back')}>
          <p>{children}</p>
        </div>
      </div>
    </LazyLoad>
  );
};
