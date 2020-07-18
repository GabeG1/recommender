import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
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
      height: '0',
      paddingBottom: 200,
      objectFit: 'contain',
      //boxSizing: 'border-box',
      backgroundColor: bgColor,
    }),
    actionArea: {
      //marginTop: 100,
      width: '50%',
      height: '10%',
      flexShrink: 1,
      alignContent: 'center',
      margin: '50px 10px',
      borderRadius: 16,
     // boxSizing: 'border-box',
      transition: '0.2s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
    card: ({ color }) => ({
     // boxSizing: 'border-box',
      //width: 256,
     // marginBottom: 200,
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
        width: 250,
       // boxSizing: 'border-box',
        backgroundColor: color,
       padding: '1rem 1.5rem 1.5rem 1rem',
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
     // boxSizing: 'border-box',
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
    popper: {
    },
    tooltip: {
      marginTop: 20,
      fontSize: 20,
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }));

  
export const CustomCard = ({ image, title, subtitle }) => {
    const classes = useStyles({ color: randomColor() });
    return (
      <CardActionArea className={classes.actionArea}>
        <Card className={classes.card}>
          <CardMedia className={classes.root} image={image} />
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant={'h2'}>
              {title}
            </Typography>
            <div className={classes.tooltip}>
            <Tooltip  title={subtitle} aria-label="description"
           placement="top"
           classes={{popper: classes.popper, 
                      tooltip: classes.tooltip
            }}>
                  <IconButton aria-label={`info about `} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                  </Tooltip>
              </div>
          </CardContent>
        </Card>
      </CardActionArea>
    );
  };