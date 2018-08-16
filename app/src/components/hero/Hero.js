export default ({ title, smallTitle }) => {
  return (
    <section className={classnames('hero')}>
      <div className={classnames('hero-bg')}>
        <div className={classnames('hero-content')}>
          <h2>React Boilerplate</h2>
          <a href='https://github.com/sizzlorox' className={classnames('hero-btn')}>Gimme github now!</a>
        </div>
      </div>
    </section>
  );
};