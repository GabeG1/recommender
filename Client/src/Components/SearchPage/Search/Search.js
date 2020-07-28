import React from 'react';
import './Search.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResultsList} from '../SearchResultsList/SearchResultsList';
import VideoGames from '../../../Util/VideoGameSearch';
import Movies from '../../../Util/MovieSearch';
import Songs from '../../../Util/SongFinder';
import Pages from './Pages/Pages';
import queryString from 'query-string';
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
import {BsMusicNoteBeamed} from 'react-icons/bs';
import {PopularItems} from '../../WelcomePage/PopularItems/PopularItems';
import {FaFireAlt} from 'react-icons/fa';
import CustomAvatar from './CustomAvatar';
//import { LoadingInfo } from './LoadingInfo';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      searchResults: [],
      total: 0,
      offset: '',
      searchTerm: '',
      loaded: false,
    };
    this.search = this.search.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.shouldCallSearch = this.shouldCallSearch.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  shouldCallSearch() {
    if (!this.props.location.search) {
      return {
        didSearch: false,
      };
    }
    //*parse parameters
    const values = queryString.parse(this.props.location.search);
    //*If there has been a change to any paramter (link parameters do no match states)

    if (
      values.q != this.state.searchTerm ||
      values.pg != this.state.offset ||
      values.cat != this.state.category
    ) {
      return {
        didSearch: true,
        q: values.q,
        pg: values.pg,
        cat: values.cat,
      };
    }
    return false;
  }

  handlePageChange(offset, history) {
    if (this.props.location) {
      return history.push(
        `/search?cat=${this.state.category}&q=${this.state.searchTerm}&pg=${offset}`
      );
    }
  }

  search(category, searchTerm, offset) {
    switch (category) {
      case 'video game':
        VideoGames.searchVideoGames(searchTerm, offset - 1).then(
          (searchResults) => {
            this.setState({
              category: category,
              searchResults: searchResults.gameList,
              total: searchResults.totalResults,
              offset: offset,
              searchTerm: searchTerm,
              loading: true,
            });
          }
        );
        break;
      case 'movie':
        Movies.searchMovies(searchTerm, offset).then((searchResults) => {
          this.setState({
            category: category,
            searchResults: searchResults.movieList,
            total: searchResults.totalResults,
            offset: offset,
            searchTerm: searchTerm,
            loading: true,
          });
        });
        break;
      case 'show':
        Shows.searchShows(searchTerm, offset).then((searchResults) => {
          this.setState({
            category: category,
            searchResults: searchResults.showList,
            total: searchResults.totalResults,
            offset: offset,
            searchTerm: searchTerm,
            loading: true,
          });
        });
        break;
      case 'song':
        {
          Songs.searchSongs(searchTerm, offset - 1).then((searchResults) => {
            this.setState({
              category: category,
              searchResults: searchResults.trackList,
              total: searchResults.totalResults,
              offset: offset,
              searchTerm: searchTerm,
              loading: true,
            });

            return {
              category: category,
              searchResults: searchResults.trackList,
            };
            //this.setState({
            // });
          });
        }
        break;
      default:
    }
  }

  componentDidMount() {
    window.focus();
    window.scrollTo(0, 0);
    //document.querySelector('.search').scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.focus();

    window.scrollTo(0, 0);

    // document.querySelector('.search').scrollTo(0, 0);
  }

  render() {
    const shouldCallSearch = this.shouldCallSearch();
    const didSearch = shouldCallSearch.didSearch;
    return (
      <div className='wrapper'>
        <header className='title'>
          <Grid container>
            <Grid item xs={10}>
              recommen<span id='inlineTitleDesign'>derrr </span>
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
              !Boolean(shouldCallSearch)
                ? this.state.category
                : shouldCallSearch.cat
            }
            searchTerm={
              !Boolean(shouldCallSearch)
                ? this.state.searchTerm
                : shouldCallSearch.q
            }
          />
        </section>
        {Boolean(shouldCallSearch) && !didSearch ? (
          <Grid container>
            <Grid item xs={12} className='popularItems'>
              <h1 className='popularItemsLabel'>
                <span className='popularItemsTitle musicTitle'>
                  Trending Music{' '}
                </span>
                <span className='fire'>
                  <BsMusicNoteBeamed className='fireIcon' />
                </span>
              </h1>
              <section className='popularItemsList musicList'>
                <PopularItems category='song' />
              </section>
            </Grid>
            <Grid item xs={12} className='popularItems'>
              <h1 className='popularItemsLabel'>
                <span className='popularItemsTitle moviesTitle'>
                  Trending Movies{' '}
                </span>
                <span className='fire'>
                  <FaFireAlt className='fireIcon' />
                </span>
              </h1>
              <section className='popularItemsList moviesList'>
                <PopularItems category='movie' />
              </section>
            </Grid>
            <Grid item xs={12} className='popularItems'>
              <h1 className='popularItemsLabel'>
                <span className='popularItemsTitle moviesTitle'>
                  Trending Shows{' '}
                </span>
                <span className='fire'>
                  <FaFireAlt className='fireIcon' />
                </span>
              </h1>
              <section className='popularItemsList moviesList'>
                <PopularItems category='show' />
              </section>
            </Grid>
          </Grid>
        ) : (
          <div className='searchResultsArea'>
            {' '}
            {Boolean(shouldCallSearch) && didSearch
              ? this.search(
                  shouldCallSearch.cat,
                  shouldCallSearch.q,
                  shouldCallSearch.pg
                )
              : ''}
            {console.log(this.state.searchResults)}
            {!Boolean(shouldCallSearch) ? (
              <SearchResultsList
                className='search'
                category={this.state.category}
                results={this.state.searchResults}
                offset={this.state.offset}
                total={this.state.total}
              />
            ) : (
              ''
            )}
          </div>
        )}
        <section className='pages'>
          <Pages
            showPages={Boolean(shouldCallSearch) ? 'hidden' : 'visible'}
            total={this.state.total}
            offset={this.state.offset}
            onPageChange={this.handlePageChange}
            resultsPerPage={20}
          />
        </section>
        <LoadingIndicator />
      </div>
    );
  }
}
