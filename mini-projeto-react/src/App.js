import { Component } from 'react';
import './App.css';

import SearchBar from './components/search-bar/search-bar.component'
import Table from './components/table/table.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      animes: [],
      animeImage: "",
    }
  }

  onSearchHandler = (event, searchTerm) => {
    console.log(searchTerm)
    fetch(`https://api.jikan.moe/v3/search/anime?q=${searchTerm}`)
      .then(res => res.json())
      .then(animes => this.setState({ animes: animes.results }));
  }

  setCurrentImage = (event, imgURL) => {
    this.setState({animeImage: imgURL});
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearchHandler={this.onSearchHandler} placeholder="Search Anime"/>
        <Table animes={this.state.animes} setImage={this.setCurrentImage}/>
        <img src={this.state.animeImage} alt="Anime Thumbnail"/>
      </div>
    );
  }
}

export default App;
