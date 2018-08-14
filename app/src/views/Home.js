// Components
import Card from '../components/card/Card';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Card cardTitle='Minimal'>As minimal as can be.</Card>
        <Card cardTitle='Easy'>Made to be easy to change and maintain</Card>
        <Card cardTitle='Practice'>Made to practice more!</Card>
      </React.Fragment>
    );
  }

}
export default Home;