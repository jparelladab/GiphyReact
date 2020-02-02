import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {

  render() {
        this.props.giphs.forEach((giph) => {
          return (
            <Gif id={giph} />
          );
        }
  }

}

export default GifList;
