import React, { Component } from 'react';
import Gif from './gif';
import GifList from './gifList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    const arr = ['TI9KWV5a14xcOfU2Xe', 'l4hmIwPexZ9IVSDu0', 'CJbUvNftlDbcQ', 'zBtFBVVo5iZPO', 'xWBADXkEvVJvy', 'Sn2DufoCgRRNS', 'qiWONQdjw33xK', 'xThtaj0S6bX9VQFbSE'];
    return (
      <div className="container">
        <div className="first-div">
          <input className="search-bar" />
          <Gif type="chosen-img" />
        </div>
          <div className="second-div">
            <giphList giphs={arr} />
          </div>
      </div>
    );
  }
}

export default App;
