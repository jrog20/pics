import React from 'react';
import unsplash from './api/unsplash';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = {
    images: []
  }

  // async/await syntax - replaces .then
  // refactor into arrow function to avoid binding this to onSubmit prop
  onSearchSubmit = async (term) => {
    // axios.get takes two parameters ->
    // 1. the URI of the service endpoint
    // 2. an object that contains the properties we want to send to the server
    const response = await unsplash.get('/search/photos', {
      // Unsplash param query = Search terms.
      // Adding params will add ?query=searchterm to end of URI
      params: { query: term },
    })
    console.log(this)
    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container margin">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App;
