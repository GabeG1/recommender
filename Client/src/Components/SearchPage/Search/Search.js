import React, {useState, useEffect, useRef} from 'react';
import './Search.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResultsList} from '../SearchResultsList/SearchResultsList';
import VideoGames from '../../../Util/VideoGameSearch';
import Movies from '../../../Util/MovieSearch';
import Songs from '../../../Util/SongFinder';
import Pages from './Pages/Pages';
import queryString from 'query-string';
import useIsMounted from 'ismounted';
import {trackPromise, usePromiseTracker} from 'react-promise-tracker';
import {useLocation, useHistory} from 'react-router-dom';
import image from './zappy_boi.jpg';
import {
  CircularProgress,
  Fade,
  Slide,
  LinearProgress,
  Grid,
  Avatar,
  GridList,
  CssBaseline,
  IconButton,
} from '@material-ui/core';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Loader from 'react-loader-spinner';
import {LoadingIndicator} from './LoadingInfo';
import * as Styles from '../../SearchPage/RecommendationsButton/RecommendationsButtonSyles';
import Shows from '../../../Util/ShowFinder';
import CustomAvatar from './CustomAvatar';
import {PopularResults} from '../PopularResults/PopularResults';
//import { LoadingInfo } from './LoadingInfo';

function animationEnded() {
  console.log('animation ended');
}
export default function Search(props) {
  const [searchValues, setSearchValues] = useState({
    category: '',
    searchResults: [],
    total: 0,
    offset: '',
    searchTerm: '',
    loading: false,
  });

  const shouldCallSearch = () => {
    if (!props.location.search) {
      return {
        didSearch: false,
      };
    }
    //*parse parameters
    const values = queryString.parse(props.location.search);
    //*If there has been a change to any paramter (link parameters do no match states)

    if (
      values.q != searchValues.searchTerm ||
      values.pg != searchValues.offset ||
      values.cat != searchValues.category
    ) {
      return {
        didSearch: true,
        q: values.q,
        pg: values.pg,
        cat: values.cat,
      };
    }
    return false;
  };

  const handlePageChange = (ot, history) => {
    if (props.location) {
      return history.push(
        `/search?cat=${searchValues.category}&q=${searchValues.searchTerm}&pg=${ot}`
      );
    }
  };

  const search = (cat, st, ot) => {
    console.log('search called');
    switch (cat) {
      case 'video game':
        VideoGames.searchVideoGames(st, ot - 1).then((results) => {
          setSearchValues({
            category: cat,
            searchResults: results.gameList,
            total: results.totalResults,
            offset: ot,
            searchTerm: st,
            loading: true,
          });
        });
        break;
      case 'movie':
        Movies.searchMovies(st, ot).then((results) => {
          setSearchValues({
            category: cat,
            searchResults: results.movieList,
            total: results.totalResults,
            offset: ot,
            searchTerm: st,
            loading: true,
          });
        });
        break;
      case 'show':
        Shows.searchShows(st, ot).then((results) => {
          setSearchValues({
            category: cat,
            searchResults: results.showList,
            total: results.totalResults,
            offset: ot,
            searchTerm: st,
            loading: true,
          });
        });
        break;
      case 'song':
        {
          Songs.searchSongs(st, ot - 1).then((results) => {
            setSearchValues({
              category: cat,
              searchResults: results.trackList,
              total: results.totalResults,
              offset: ot,
              searchTerm: st,
              loading: true,
            });
          });
        }
        break;
      default:
    }
    return;
  };

  useEffect(() => {
    if (searchValues.cat) {
      return () => {
        window.focus();
        window.scrollTo(0, 0);
      };
    } else {
    }
  });

  /*animated.addEventListener('animationiteration', () => {
      animated.style.animationPlayState = 'paused';
    });*/
  //document.querySelector('.search').scrollTo(0, 0);

  const callSearch = shouldCallSearch();

  const didSearch = callSearch.didSearch;
  return (
    <div className='wrapper'>
      <header className='title'>
        <Grid container>
          <Grid item xs={10}>
            <section className='titleText'>
              recommen<span id='inlineTitleDesign'>derrr </span>
            </section>
          </Grid>

          <Grid item xs={2}>
            <CustomAvatar
              src='https://media-exp1.licdn.com/dms/image/C4E03AQE1Le64TE8m6Q/profile-displayphoto-shrink_100_100/0?e=1598486400&v=beta&t=L9ymk5BMqxbu-RP1o9xQgBC2YnDGX2xdkTuIzKm15Wg'
              size={40}
            />
          </Grid>
        </Grid>
      </header>

      <section className='searchBar'>
        <SearchBar
          category={
            !Boolean(callSearch) ? searchValues.category : callSearch.cat
          }
          searchTerm={
            !Boolean(callSearch) ? searchValues.searchTerm : callSearch.q
          }
        />
      </section>
      {Boolean(callSearch) && !didSearch ? (
        <div>
          <PopularResults />
        </div>
      ) : (
        <div className='searchResultsArea'>
          {Boolean(callSearch) && didSearch
            ? search(callSearch.cat, callSearch.q, callSearch.pg)
            : ''}
          {!Boolean(callSearch) ? (
            <SearchResultsList
              className='search'
              category={searchValues.category}
              results={searchValues.searchResults}
              offset={searchValues.offset}
              total={searchValues.total}
            />
          ) : (
            ''
          )}
          <LoadingIndicator aria-label='popular-items-loader' />
        </div>
      )}
      <section className='pages'>
        <Pages
          showPages={Boolean(callSearch) ? 'hidden' : 'visible'}
          total={searchValues.total}
          offset={searchValues.offset}
          onPageChange={handlePageChange}
          resultsPerPage={20}
        />
      </section>
    </div>
  );
}
