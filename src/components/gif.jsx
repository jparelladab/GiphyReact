import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} className={this.props.type} alt="giphy" />
    );
  }
}


export default Gif;
