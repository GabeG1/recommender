import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import {VideoGame} from '../VideoGame/VideoGame'
import { SearchResults } from '../SearchResults/SearchResults';
import './VideoGameList.css'
import { TextareaAutosize } from '@material-ui/core';

const useGridStyles = makeStyles(({ breakpoints }) => ({
    root: {
      [breakpoints.up('md')]: {
          display: 'flex',
        justifyContent: 'center',
        //boxSizing: 'border-box',
        overflow: 'scroll',
        
        //width: '100%',
        //maxWidth: 600,
       //paddingLeft: 900
      },
    },
  }));

export function VideoGameList(props) {
    const gridStyles = useGridStyles();
        return (
    <div styles={{flexGrow: 1}}>
      <Grid classes={gridStyles} container spacing={3} wrap={'nowrap'}>
            {props.videoGames.map(game => {
            return  <VideoGame game={game} />; }) 
            }
            </Grid>
     </div>
        );
      }
