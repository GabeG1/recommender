import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles((theme) => ({
 root: {
   display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    display: 'flex',
    padding: theme.spacing(2),
    flexBasis: '50%',
    width: '200px',
    maxWidth: '250px',
    height: '200px',
  }, 
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  tooltip: {
    fontSize: 20,
    paddingTop: -20,
  }
}));

 export function VideoGame(props) {
  const classes = useStyles();
        return (    
            <GridListTile key={props.game.id} cols={2}
            className={classes.root} >
            <img src={props.game.image} alt={props.game.id} />
            <GridListTileBar
              title={props.game.name}
              actionIcon={
                <Tooltip title={props.game.description} aria-label="add"
                className={classes.tooltip}>
                <IconButton aria-label={`info about `} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
               } />
          </GridListTile>
              
        )  
  }
