import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Color from 'color';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import UserRating from '../../UserRating/UserRating';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import './CustomCard.css';

const randomColor = () => {
  const r = Math.floor(Math.random() * 200) + 30;
  const g = Math.floor(Math.random() * 200) + 30;
  const b = Math.floor(Math.random() * 200) + 30;
  return `rgb(${r}, ${g}, ${b})`;
};
const useStyles = makeStyles(() => ({
  media: ({bgColor = 'rgba(0, 0, 0, 0.08)'}) => ({
    width: '20rem',
    height: '0',
    paddingBottom: 220,
    objectFit: 'contain',
    backgroundColor: bgColor,
  }),
  actionArea: {
    display: 'flex',
    width: '20rem',
    flexShrink: 1,
    marginLeft: '5px',
    marginRight: '5px',
    height: '100%',
    paddingBottom: '1.5rem',
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&focusVisible': {},
  },
  card: ({color}) => ({
    borderRadius: '2rem',
    boxShadow: 'none',
    height: '450px',
    '&:hover': {
      boxShadow: `0 0.1rem 0.5px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({color}) => {
    return {
      height: '100%',
      width: '18rem',
      backgroundColor: color,
    };
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Keania One, cursive',
    fontSize: '2rem',
    height: 100,
    color: '#fff',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  popper: {},
  tooltip: {
    display: 'block',
    fontSize: 20,
  },
  box: {},
  bottomCard: {
    marginTop: 30,
    padding: '0px 10px',
    justifyContent: 'space-between',

    display: 'flex',
    wrap: 'noWrap',
  },
}));

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

export const CustomCard = ({image, title, subtitle, id}) => {
  const classes = useStyles({color: randomColor()});
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} />
        <CardContent className={classes.content}>
          <div className='cardTitle'>
            <Typography className={classes.title} variant={'h2'}>
              {title}
            </Typography>
          </div>
          <ThemeProvider theme={theme}>
            <div className={classes.bottomCard}>
              <UserRating id={id} />
              <div className='cardTooltip'>
                <Tooltip
                  title={subtitle}
                  aria-label='description'
                  placement='top'
                  classes={{tooltip: classes.tooltip}}>
                  <IconButton
                    aria-label={`info about `}
                    classes={{root: classes.icon}}>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </ThemeProvider>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
