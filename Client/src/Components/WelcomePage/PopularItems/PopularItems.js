import React, { useState, useEffect, withState } from 'react';
import Songs from '../../../Util/SongFinder';
import { SearchResultsList } from '../../SearchPage/SearchResultsList/SearchResultsList';

export function PopularItems() {
  const [popularTracksResults, setPopularTracksResults] = useState('');

  useEffect(() => {
    async function search() {
      if (popularTracksResults == '') {
        console.log('searching in use effect');
        Songs.getPopularSongs().then((response) => {
          //console.log(popularTracks);
          setPopularTracksResults(response);
        });
      } else {
        return '';
      }
    }
    search();
  });

  return <SearchResultsList results={popularTracksResults} category="song" />;
}
