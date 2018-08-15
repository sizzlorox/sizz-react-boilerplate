export default ({ github, children }) => {
  return (
    <div className={classnames('profile')}>
      <img src={require('../../assets/images/avatar.png')} />
      <p>{children}</p>
      {github ? <a href={github}>Github Page</a> : ''}
    </div>
  );
};