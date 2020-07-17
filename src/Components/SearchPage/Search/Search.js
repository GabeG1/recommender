import React from 'react';
import './Search.css'
import * as Styles from './SearchStyles.js';
import TextField from '@material-ui/core/TextField';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import VideoGames from '../../../Util/VideoGameSearch';
import Movies from '../../../Util/MovieSearch';
export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            searchResults: []
        }
        this.search = this.search.bind(this);
    }
    search(category, searchTerm) {
        console.log(category);

        switch(category) {
            case 'video game':
                VideoGames.searchVideoGames(searchTerm).then(searchResults => {
            this.setState({
                category: category,
              searchResults: searchResults
            });
    });
                break;
            case 'movie':
                Movies.searchVideoGames(searchTerm).then(searchResults => {
                    this.setState({
                    category: category,
                      searchResults: searchResults
                    });
            });
            break;
            default:
            console.log('no matches')

    }
}
    render() {
        return (
        <div className='wrapper'>
            <header className="title">
            recommen<span id="inlineTitleDesign">derrr</span>
            </header>
            <section  className="searchBar">
            <SearchBar search={this.search}/>
            <SearchResults category={this.state.category} results={this.state.searchResults}/>
            </section>
        </div>
        )
        } 
}

