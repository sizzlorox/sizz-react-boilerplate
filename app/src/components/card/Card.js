class Card extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={classnames('card')}>
        <div className={classnames('front')}>
          <p>{this.props.cardTitle}</p>
        </div>
        <div className={classnames('back')}>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }

}
export default Card;
