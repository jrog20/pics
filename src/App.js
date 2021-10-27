import React from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {

  onSearchSubmit(term) {
    // axios.get takes two parameters ->
    // 1. the URI of the service endpoint
    // 2. an object that contains the properties we want to send to the server
    axios.get('https://api.unsplash.com/search/photos', {
      // Unsplash param query = Search terms.
      // Adding params will add ?query=searchterm to end of URI
      params: { query: term },
      headers: {
        Authorization: 'Client-ID vXO8t_QybpDh73rhxROhnaVxg2bm11h14VGHI8stS1U'
      }
    })
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
