import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    const token = "aAkCjX1viLR7NrnDmcSkOev90IewVt8i";
    return `http://api.giphy.com/v1/gifs/search?api_key=${token}&q=${event.target.value}`;
  }


  render() {
    return (
      <input className="search-bar" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
