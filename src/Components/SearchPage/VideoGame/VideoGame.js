import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import './VideoGame.css';
import Color from 'color';
import NoSsr from '@material-ui/core/NoSsr';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const randomColor = () => {
  const r = Math.floor(Math.random() * 220);
  const g = Math.floor(Math.random() * 220);   
  const b = Math.floor(Math.random() * 220);   
  return `rgb(${r}, ${g}, ${b})`;
}
const useStyles = makeStyles(() => ({
  root: ({ bgColor = 'rgba(0, 0, 0, 0.08)' }) => ({
    width: '100%',
    height: 0,
    paddingBottom: 200,
    boxSizing: 'border-box',
    backgroundColor: bgColor,
  }),
  actionArea: {
    //marginTop: 100,
    width: '50%',
    height: '10%',
    margin: '50px 10px',
    borderRadius: 16,
    boxSizing: 'border-box',
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    boxSizing: 'border-box',
    //width: 256,
    borderRadius: 16,
    
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      width: 300,
      boxSizing: 'border-box',
      backgroundColor: color,
     // padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
     textAlign: 'center',
    fontFamily: 'Keania One, cursive',
    fontSize: '2rem',
    height: 100,
    color: '#fff',
    textTransform: 'uppercase',
  },
  subtitle: {
    boxSizing: 'border-box',
    fontFamily: 'Montserrat',
    color: '#fff',
    //height: '100px',
    overflow: 'scroll',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'blue',
    }
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


const CustomCard = ({ classes, image, title, subtitle }) => {
  //const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia className={classes.root} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h2'}>
            {title}
          </Typography>
          <Tooltip  title={subtitle} aria-label="description"
          
          style={{marginLeft: 170, marginTop: 20}}>
                <IconButton aria-label={`info about `} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
//props.game.id
//props.game.image
//props.game.name
//props.game.description

 export function VideoGame(props) {
  const styles = useStyles({ color: randomColor() });

        return (    
          <CustomCard
          classes={styles}
          title={props.game.name}
          subtitle={props.game.description}
          image={
            props.game.image
          }
            />  
        )  
  }
