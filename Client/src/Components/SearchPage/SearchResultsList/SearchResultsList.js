import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { VideoGame } from '../ResultsCategories/VideoGame/VideoGame';
import { Movie } from '../ResultsCategories/Movie/Movie';
import { Song } from '../ResultsCategories/Song/Song';
import './SearchResultsList.css';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    display: 'flex',
    height: '100%',
    padding: '0 10px',
    overflowY: 'auto',
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: '100%',
    //margin: '0 auto',
    [breakpoints.up('xs')]: {
      maxHeight: '60vh',
    },
    [breakpoints.up('sm')]: {
      maxHeight: '75vh',
    },
  },
}));

export function SearchResultsList(props) {
  const gridStyles = useGridStyles();
  console.log('searchresults called');
  return (
    <div>
      <Grid
        classes={gridStyles}
        xs={12}
        sm={12}
        container
        spacing={2}
        wrap={'nowrap'}
      >
        {props.results.map((result) => {
          switch (props.category) {
            case 'video game':
              return <VideoGame game={result} />;
            case 'movie':
              return <Movie movie={result} />;
            case 'song':
              return <Song song={result} />;
            default:
              console.log('nothing');
          }
        })}
      </Grid>
    </div>
  );
}
