import React, { Component } from 'react';

class SearchBar extends Component {

  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
    this.props.keywordFunction(event);
  }


  render() {
    return (

      <div className="search-bar">
        <img src="https://media.giphy.com/media/SpnOZrxjQ94KNzEcWF/giphy.gif" alt="arrow" />
        <input onChange={this.handleUpdate} />
        <img className="opposite" src="https://media.giphy.com/media/SpnOZrxjQ94KNzEcWF/giphy.gif" alt="arrow" />
      </div>

    );
  }
}

export default SearchBar;
