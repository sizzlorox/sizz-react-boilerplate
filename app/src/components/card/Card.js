export default ({ cardTitle, children }) => {
  return (
    <div className={classnames('card')}>
      <div className={classnames('front')}>
        <p>{cardTitle}</p>
      </div>
      <div className={classnames('back')}>
        <p>{children}</p>
      </div>
    </div>
  );
};
