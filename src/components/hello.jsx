const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
      !
    </div>
  );
};

class Hola extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <h1 className={this.state.clicked ? "clicked" : ""}
          onClick={this.handleClick}>
        Hola, {this.props.name}
      </h1>
    );
  }
}
