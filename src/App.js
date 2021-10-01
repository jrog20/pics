import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {

  onSearchSubmit(term) {
    console.log(term)
  }

  render() {
    return (
      <div className="ui container margin">
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
}

export default App;
