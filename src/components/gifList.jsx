import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.gifsArr.map((gif) => {
      return <Gif type="side-gifs" id={gif.id} key={gif.id} clickEvent={this.props.clickFunction} />;
    });
  }
}

export default GifList;
