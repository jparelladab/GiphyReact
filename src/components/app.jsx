import React, { Component } from 'react';
import giphy from 'giphy-api';
import Gif from './gif';
import GifList from './gifList';
import SearchBar from './searchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "TI9KWV5a14xcOfU2Xe"
    };
  }

  search = (query) => {
    giphy('aAkCjX1viLR7NrnDmcSkOev90IewVt8i').search({
      q: query,
      limit: 8
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
      console.log(this.state.gifs);
    });
  }

  clickGif = (e) => {
    const pattern = new RegExp('media\\/(.+)\\/giphy.gif');
    // console.log(pattern.exec(e.target.src)[1]);
    this.setState({
      selectedGifId: pattern.exec(e.target.src)[1]
    });
  }

  render() {
    return (
      <div className="container">
        <div className="first-div">
          <SearchBar searchFunction={this.search} />
          <Gif type="chosen-img" id={this.state.selectedGifId} />
        </div>
        <div className="second-div">
          <GifList gifsArr={this.state.gifs} clickFunction={this.clickGif} />
        </div>
      </div>
    );
  }
}

export default App;
