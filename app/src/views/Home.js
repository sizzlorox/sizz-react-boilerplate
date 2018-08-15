// Components
import Card from '../components/card/Card';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className={classnames('home-content')}>
          This was made for me to keep a well structured boilerplate for personal use.
          It's intended to keep being updated as I learn more about structuring React Apps.
          I'm trying to get as much knowledge as I can with ReactJS's best practices and applying it here.
        </div>
        <Card cardTitle='Minimal'>As minimal as can be.</Card>
        <Card cardTitle='Easy'>Made to be easy to change and maintain</Card>
        <Card cardTitle='Practice'>Made for practice!</Card>
      </React.Fragment>
    );
  }

}
export default Home;