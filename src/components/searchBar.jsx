import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }


  render() {
    return (
      <input className="search-bar" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
