import React from 'react';
import './Search.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResultsList } from '../SearchResultsList/SearchResultsList';
import VideoGames from '../../../Util/VideoGameSearch';
import Movies from '../../../Util/MovieSearch';
import Songs from '../../../Util/SongFinder';
import Pages from './Pages/Pages';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      searchResults: [],
      total: 0,
      offset: 0,
      searchTerm: '',
    };
    this.search = this.search.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(offset) {
    this.search(this.state.category, this.state.searchTerm, offset);
  }

  search(category, searchTerm, offset = 0) {
    console.log(category);
    console.log(Number(offset));
    switch (category) {
      case 'video game':
        VideoGames.searchVideoGames(searchTerm).then((searchResults) => {
          this.setState({
            category: category,
            searchResults: searchResults,
            searchTerm: searchTerm,
          });
        });
        break;
      case 'movie':
        Movies.searchMovies(searchTerm).then((searchResults) => {
          this.setState({
            category: category,
            searchResults: searchResults,
            searchTerm: searchTerm,
          });
        });
        break;
      case 'song':
        Songs.searchSongs(searchTerm, offset).then((searchResults) => {
          this.setState({
            category: category,
            searchResults: searchResults.trackList,
            total: searchResults.totalResults,
            offset: searchResults.offset,
            searchTerm: searchTerm,
          });
        });
        break;
      default:
        console.log('no matches');
    }
  }
  render() {
    return (
      <div className="wrapper">
        <header className="title">
          recommen<span id="inlineTitleDesign">derrr</span>
        </header>
        <section className="searchBar">
          <SearchBar search={this.search} />
        </section>
        <SearchResultsList
          category={this.state.category}
          results={this.state.searchResults}
          offset={this.state.offset}
          total={this.state.total}
        />
        <section className="pages">
          <Pages
            showPages={this.state.searchTerm === '' ? 'hidden' : 'visible'}
            total={this.state.total}
            offset={this.state.offset}
            onPageChange={this.handlePageChange}
          />
        </section>
      </div>
    );
  }
}
