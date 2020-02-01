import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  turnRed = () => {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div className={this.state.clicked ? "clicked" : "container"}
      onClick={this.turnRed}>
        <div className="first-div">First DIV</div>
        <div className="second-div">Second DIV</div>
      </div>
    );
  }
}

export default App;
