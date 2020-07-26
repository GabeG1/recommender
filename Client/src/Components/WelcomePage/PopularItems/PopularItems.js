import React, {useState, useEffect, withState} from 'react';
import Songs from '../../../Util/SongFinder';
import {SearchResultsList} from '../../SearchPage/SearchResultsList/SearchResultsList';
import Movies from '../../../Util/MovieSearch';
import Shows from '../../../Util/ShowFinder';

export function PopularItems(props) {
  const [popularResults, setPopularResults] = useState('');

  useEffect(() => {
    async function search() {
      // console.log(props.category);
      if (popularResults == '') {
        if (props.category == 'song') {
          console.log('searching in use effect');
          Songs.getPopularSongs().then((response) => {
            //console.log(popularTracks);
            setPopularResults(response);
          });
        } else if (props.category == 'movie') {
          Movies.getTrendingMovies().then((response) => {
            //console.log(popularTracks);
            setPopularResults(response);
          });
        } else if (props.category == 'show') {
          Shows.getTrendingShows().then((response) => {
            //console.log(popularTracks);
            setPopularResults(response);
          });
        }
      } else {
        return '';
      }
    }
    search();
  });

  return (
    <SearchResultsList results={popularResults} category={props.category} />
  );
}
