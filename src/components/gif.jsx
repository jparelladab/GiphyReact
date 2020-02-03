import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.id !== this.props.id;
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    console.log("RENDERING GIF " + this.props.id);
    return (
      <img src={src} className={this.props.type} alt="giphy" onClick={this.props.clickEvent} />
    );
  }
}


export default Gif;
