import React from 'react';
import './Search.css'
import * as Styles from './SearchStyles.js';
import TextField from '@material-ui/core/TextField';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import VideoGames from '../../../Util/VideoGameSearch';
export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        }
        this.search = this.search.bind(this);
    }
    search(searchTerm) {
        VideoGames.searchVideoGames(searchTerm).then(searchResults => {
            this.setState({
              searchResults: searchResults
            });
    });
}
    render() {
        return (
        <div className='wrapper'>
            <header className="title">
            recommen<span id="inlineTitleDesign">derrr</span>
            </header>
            <section  className="searchBar">
            <SearchBar search={this.search}/>
            <SearchResults results={this.state.searchResults}/>
            </section>
        </div>
        )
        } 
}

