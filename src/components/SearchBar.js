import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Search</label>
          <input type='text' />
        </form>
      </div>
    )
  }
}

export default SearchBar;