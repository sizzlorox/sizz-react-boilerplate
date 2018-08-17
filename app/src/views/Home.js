// Components
import Hero from '../components/hero/Hero';
import Card from '../components/card/Card';
import Profile from '../components/profile/Profile';
import Footer from '../components/footer/Footer';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <section className={classnames('content')}>
          <Hero />
          <div className={classnames('home-content')}>
            This was made for me to keep a well structured boilerplate for personal use.
            It's intended to keep being updated as I learn more about structuring React Apps.
            I'm trying to get as much knowledge as I can with ReactJS's best practices and applying it here.
          </div>
          <Card cardTitle='Minimal'>As minimal as can be.</Card>
          <Card cardTitle='Easy'>Made to be easy to change and maintain</Card>
          <Card cardTitle='Practice'>Made for practice!</Card>
          <div className={classnames('profile-content')}>
            <h3>Creator</h3>
            <Profile github='https://github.com/sizzlorox'>sizzlorox</Profile>
            <Profile>Some other guy with no github</Profile>
            <Profile github='//google.com'>Some other guy</Profile>
            <h3>Contributors</h3>
            <p>Hopefully people will contribute in the future</p>
          </div>
          <Footer />
        </section>
      </React.Fragment>
    );
  }

}
export default Home;