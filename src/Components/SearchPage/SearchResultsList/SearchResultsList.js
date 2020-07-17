import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import {VideoGame} from '../VideoGame/VideoGame'
import {Movie} from '../Movie/Movie'
import { SearchResults } from '../SearchResults/SearchResults';
import './SearchResultsList.css'
import { TextareaAutosize } from '@material-ui/core';

const useGridStyles = makeStyles(({ breakpoints }) => ({
    root: {
      [breakpoints.up('md')]: {
          display: 'flex',
      //  justifyContent: 'center',
        //boxSizing: 'border-box',
        overflow: 'auto',
        flexGrow: 1,
        alignContent: 'center',
        //margin: '100%',
    //    / width: '100%',
        //maxWidth: 600,
       //paddingLeft: 900
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
