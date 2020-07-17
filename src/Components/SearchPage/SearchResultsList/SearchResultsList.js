import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import {VideoGame} from '../ResultsCategories/VideoGame/VideoGame'
import {Movie} from '../ResultsCategories/Movie/Movie'
import './SearchResultsList.css'

const useGridStyles = makeStyles(({ breakpoints }) => ({
    root: {
      [breakpoints.up('md')]: {
          display: 'flex',
        overflow: 'auto',
        flexGrow: 1,
        alignContent: 'center',
        alignItems: 'center',
      maxWidth: '95%',
        margin: '0 auto',
       padding: 10,
      },
    },
  }));


export function SearchResultsList(props) {
    const gridStyles = useGridStyles();
        return (
    <div styles={{flexGrow: 1}}>
      <Grid classes={gridStyles} container  wrap={'nowrap'}>
            
            {props.results.map(result => {
            switch(props.category) {
                case 'video game':
            return  <VideoGame game={result} />
            case 'movie':
            return  <Movie movie={result}/>
            default: 
            console.log('nothing') 
            }
        }) 
            
            }
            </Grid>
     </div>
        );
      }
