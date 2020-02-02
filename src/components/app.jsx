import React, { Component } from 'react';
import Gif from './gif';
import GifList from './gifList';
import SearchBar from './searchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: ['TI9KWV5a14xcOfU2Xe', 'l4hmIwPexZ9IVSDu0', 'CJbUvNftlDbcQ', 'zBtFBVVo5iZPO', 'xWBADXkEvVJvy', 'Sn2DufoCgRRNS', 'qiWONQdjw33xK', 'xThtaj0S6bX9VQFbSE'],
      selectedGifId: "TI9KWV5a14xcOfU2Xe"
    };
  }

  render() {
    return (
      <div className="container">
        <div className="first-div">
          <SearchBar />
          <Gif type="chosen-img" id={this.state.selectedGifId} />
        </div>
        <div className="second-div">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
