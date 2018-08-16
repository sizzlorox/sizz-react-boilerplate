export default ({ github, children }) => {
  return (
    <div className={classnames('profile')}>
      <img src={require('../../assets/images/avatar.jpeg')} alt='Profile Image' />
      <p>{children}</p>
      {github ? <a href={github}>Github Page</a> : ''}
    </div>
  );
};