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
      selectedGifId: "TI9KWV5a14xcOfU2Xe",
      keyword: false
    };
  }

  keyword = (e) => {
    if (e.target.value !== '') {
      this.setState({
        keyword: true
      });
    } else {
      this.setState({
        keyword: false
      });
    }
  }

  search = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?aAkCjX1viLR7NrnDmcSkOev90IewVt8i&q=${query}&limit=8&api_key=aAkCjX1viLR7NrnDmcSkOev90IewVt8i`)
      .then(resp => resp.json())
      .then((resp) => { this.setState({ gifs: resp.data }); });
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
        <div className={this.state.keyword ? "first-div-typed" : "first-div-start"}>
          <img src="https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif" alt="welcome" />
          <SearchBar searchFunction={this.search} keywordFunction={this.keyword} />
          <div className="selectedGif">
            <Gif type="chosen-img" id={this.state.selectedGifId} />
          </div>
        </div>
        <div className={this.state.keyword ? "second-div-typed" : "second-div-start"}>
          <GifList gifsArr={this.state.gifs} clickFunction={this.clickGif} />
        </div>
      </div>
    );
  }
}

export default App;
