import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {VideoGame} from '../ResultsCategories/VideoGame/VideoGame';
import {Movie} from '../ResultsCategories/Movie/Movie';
import {Song} from '../ResultsCategories/Song/Song';
import {Show} from '../ResultsCategories/Show/Show';
import './SearchResultsList.css';

const useGridStyles = makeStyles(({breakpoints}) => ({
  root: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    display: 'flex',
    height: '100%',
    padding: '0 10px',
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: '100%',
    [breakpoints.up('xs')]: {
      maxHeight: '100%',
    },
  },
}));

export function SearchResultsList(props) {
  const gridStyles = useGridStyles();

  return (
    <div>
      <Grid
        classes={gridStyles}
        container
        spacing={2}
        wrap={'nowrap'}>
        {console.log(props.results)}
        {props.results
          ? props.results.map((result, i) => {
              switch (props.category) {
                case 'video game':
                  return <VideoGame key ={i} game={result} />;
                case 'movie':
                  return <Movie key ={i} movie={result} />;
                case 'show':
                  return <Show key ={i} show={result} />;
                case 'song':
                  return <Song key ={i} song={result} />;
                default:
                  return {};
              }
            })
          : ''}
      </Grid>
    </div>
  );
}
