import React from 'react';
import { VideoGameList } from '../VideoGameList/VideoGameList';


export class SearchResults extends React.Component {
    render() {
        return (
        <div>
         <VideoGameList videoGames={this.props.results}></VideoGameList>   
        </div>
        )
      } 
}

