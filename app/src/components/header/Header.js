export default ({ title, smallTitle }) => {
  return (
    <div className={classnames('header')}>
      <h1>{title}</h1>
      <h4>{smallTitle}</h4>
    </div>
  );
};