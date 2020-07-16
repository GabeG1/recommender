import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList'
import {VideoGame} from '../VideoGame/VideoGame'
import { SearchResults } from '../SearchResults/SearchResults';
import './VideoGameList.css'
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        flexGrow: 1,
    },
    gridList: {   
        display: 'flex',
        height: '500px',
        width: '800px',
       // maxWidth: '50%',
       // maxHeight:  '50%',   
    },
  }));

export function VideoGameList(props) {
    const classes = useStyles();
        return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
            {props.videoGames.map(game => {
            return  <VideoGame game ={game} />; }) 
            }
            </GridList>
        </div>
        );
      }
