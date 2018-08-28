// Components
import LazyLoad from 'react-lazyload';
import Loading from '../loading/Loading';

export default ({ cardTitle, children }) => {
  return (
    <div className={classnames('card')}>
      <LazyLoad offset={100} placeholder={<Loading className={classnames('placeholder')}/>} once>
        <React.Fragment>
          <div className={classnames('front')}>
            <p>{cardTitle}</p>
          </div>
          <div className={classnames('back')}>
            <p>{children}</p>
          </div>
        </React.Fragment>
      </LazyLoad>
    </div>
  );
};
