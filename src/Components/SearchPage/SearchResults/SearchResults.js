import React from 'react';
import { SearchResultsList } from '../SearchResultsList/SearchResultsList';


export class SearchResults extends React.Component {
    render() {
        return (
        <div>
         <SearchResultsList category={this.props.category} 
         results={this.props.results}></SearchResultsList>   
        </div>
        )
      } 
}

