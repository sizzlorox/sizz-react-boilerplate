export default () => {
  return (
    <div className={classnames('footer')}>
      <div className={classnames('footer-bg')}>
        <div className={classnames('footer-content')}>
          <p>Copyright © {new Date().getFullYear()} Something something</p>
        </div>
      </div>
    </div>
  );
};