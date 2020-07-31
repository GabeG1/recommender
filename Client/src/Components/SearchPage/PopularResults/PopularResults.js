import React, {useEffect, useState} from 'react';
import {BsMusicNoteBeamed} from 'react-icons/bs';
import {Grid} from '@material-ui/core';
import {FaFireAlt} from 'react-icons/fa';
import {LoadingIndicator} from '../Search/LoadingInfo';
import {trackPromise, usePromiseTracker} from 'react-promise-tracker';
import Songs from '../../../Util/SongFinder';
import {SearchResultsList} from '../../SearchPage/SearchResultsList/SearchResultsList';
import Movies from '../../../Util/MovieSearch';
import Shows from '../../../Util/ShowFinder';
import PropagateLoader from 'react-spinners/PropagateLoader';

export function PopularResults() {
  const [display, setDisplay] = useState(false);
  const [popularSongs, setPopularSongs] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  const [popularShows, setPopularShows] = useState(null);

  useEffect(() => {
    async function search() {
      console.log('popular songs:', Boolean(popularSongs));
      if (!Boolean(popularSongs)) {
        console.log('searching in use effect');
        Songs.getPopularSongs().then((response) => {
          //console.log(popularTracks);
          console.log('results1 received');
          setPopularSongs(response);
          return;
        });
      }
    }
    search();
  }, [popularSongs]);

  useEffect(() => {
    async function search() {
      console.log('popular movies:', Boolean(popularMovies));
      if (!Boolean(popularMovies)) {
        Movies.getTrendingMovies().then((response) => {
          setPopularMovies(response);
          return;
        });
      }
    }
    search();
  }, [popularMovies]);

  useEffect(() => {
    async function search() {
      console.log('popular shows:', Boolean(popularShows));
      if (!Boolean(popularShows)) {
        Shows.getTrendingShows().then((response) => {
          //console.log(popularTracks);
          console.log('results3 received');
          setPopularShows(response);
          return;
        });
      }
    }
    search();
  }, [popularShows]);

  useEffect(() => {
    if (!display && popularSongs && popularMovies && popularShows) {
      setDisplay(true);
    }
  });

  return !display ? (
    <div
      style={{
        width: '100%',
        height: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      }}>
      <PropagateLoader color='#d59ac8f0' height='100' width='100' />
    </div>
  ) : (
    <Grid container>
      <Grid item xs={12} className='popularItems'>
        <h1 className='popularItemsLabel'>
          <span className='popularItemsTitle musicTitle'>Trending Music</span>
          <span className='fire'>
            <BsMusicNoteBeamed className='fireIcon' />
          </span>
        </h1>
        <section className='popularItemsList musicList'>
          <SearchResultsList results={popularSongs} category={'song'} />
        </section>
      </Grid>
      <Grid item xs={12} className='popularItems'>
        <h1 className='popularItemsLabel'>
          <span className='popularItemsTitle moviesTitle'>Trending Movies</span>
          <span className='fire'>
            <FaFireAlt className='fireIcon' />
          </span>
        </h1>
        <section className='popularItemsList moviesList'>
          <SearchResultsList results={popularMovies} category={'movie'} />
        </section>
      </Grid>
      <Grid item xs={12} className='popularItems'>
        <h1 className='popularItemsLabel'>
          <span className='popularItemsTitle moviesTitle'>Trending Shows</span>
          <span className='fire'>
            <FaFireAlt className='fireIcon' />
          </span>
        </h1>
        <section className='popularItemsList moviesList'>
          <SearchResultsList results={popularShows} category={'show'} />
        </section>
      </Grid>
    </Grid>
  );
}
