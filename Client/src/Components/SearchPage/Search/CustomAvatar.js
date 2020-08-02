import React, {Component, useEffect} from 'react';
import {
  IconButton,
  MenuItem,
  Menu,
  MenuList,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Badge,
  makeStyles,
  Divider,
  Grid,
} from '@material-ui/core';
//import {makeStyles} from '@material-ui/core';
import {
  BrowserRouter as Router,
  useHistory,
} from 'react-router-dom';

import EditInfo from '../../EditInfoPage/EditInfo/EditInfo'

const useStyles = makeStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '##right-click on a color to see the context-menu ... and check out the intellisense command (see docs)',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
  paperRoot: {
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    backgroundColor: '#f1f1f1',
    //position: relative,
    //marginTop: 12.1,
    //maxHeight: 'contain',
    // backgroundColor: 'rgba(255, 255, 255, 0.87)',
  },
  dividerRoot: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  menuListRoot: {
    padding: 0,
    height: '100%',
    // marginTop: '-5px',
  },
  menuListItemRoot: {
    justifyContent: 'flex-start',
    fontFamily: 'Source Sans Pro',
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 17,
    fontWeight: 600,
    //textDecorationColor: 'rgba(0, 0, 0, 0.6)',
    textSizeAdjust: '100%',
    //fontStretch: '100%',
    padding: '15px 10px',
    '&:hover': {
      backgroundColor: '#ddd',
    },
  },
  logoutButtonMenuListItem: {
    color: 'rgb(250, 250, 250)',
    backgroundColor: 'rgb(206, 9, 9)',
    '&:hover': {
      color: 'rgb(230, 230, 230)',
      backgroundColor: 'rgb(247,80,80)',
    }
  },
  popper: {
    zIndex: 1,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent #f1f1f1 transparent`,
      },
    },
  },
  arrow: {
    zIndex: 1,
    position: 'absolute',
    fontSize: 7,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
}));

export default function CustomAvatar(props) {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [arrowRef, setArrowRef] = React.useState(null);
  let mouseOver = false;
  const toWelcome = { redirect: "/" };
  //const arrowRef = React.useRef(null);

  const handleToggle = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const handleClose = (event) => {
    setTimeout(() => {
      if (mouseOver == false && open) {
        setOpen(false);
      }
    }, 10);
  };

  const editInfo = () => {
    return history.push("/search/editInfo",{ response: "response" })

  };

  const logOut = (event) => {
    return history.push("/");
  }
  useEffect(() => {
    console.log(arrowRef);
  });

  const {src, size, onClick, style} = props;
  var newStyle = {
    width: size ? size + 'px' : '40px',
    height: size ? size + 'px' : '40px',
    color: 'rgb(255, 255, 255)',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: '40px',
    fontSize: '24px',
    borderRadius: '50%',
    left: '0px',
    WebkitUserSelect: 'none',
    border: '0px solid rgba(128, 128, 128, 0.14902)',
    backgroundImage: 'url("' + src + '")',
    backgroundClip: 'border-box',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
  };

  //Object.assign(newStyle, style); 
  return (
    <Grid container>
      <Badge
        overlap='circle'
        classes={{
          badge: classes.badge,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant='dot'
        onMouseOver={() => {
          mouseOver = true;
          handleToggle();
        }}
        onMouseOut={() => {
          mouseOver = false;
          handleClose();
        }}>
        <IconButton
          style={newStyle}
          onMouseOver={() => {
            mouseOver = true;
            handleToggle();
          }}
          onMouseOut={() => {
            mouseOver = false;
            handleClose();
          }}
          ref={anchorRef}
          aria-label='account of current user'
          aria-controls={open ? 'menu-appbar' : undefined}
          aria-haspopup='true'
        />
      </Badge>
      <Popper
        open={open}
        className={classes.popper}
        anchorEl={anchorRef.current}
        aria-label='menu-popper'
        onMouseOver={() => {
          mouseOver = true;
          handleToggle();
        }}
        onMouseOut={() => {
          mouseOver = false;
          handleClose();
        }}
        role={undefined}
        placement={'bottom'}
        transition
        modifiers={{
          arrow: {
            enabled: true,
            element: arrowRef,
          },
        }}
        disablePortal>
        <span className={classes.arrow} ref={setArrowRef} />
        <Paper classes={{root: classes.paperRoot}}>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList id='menu-appbar' classes={{root: classes.menuListRoot}}>
              <MenuItem
                button
                onClick={editInfo}
                classes={{
                  root: classes.menuListItemRoot,
                  selected: classes.itemSelected,
                }}>
                My Account
              </MenuItem>
              <Divider classes={{root: classes.dividerRoot}} />
              <MenuItem
                button
                onClick={handleClose}
                classes={{
                  root: classes.menuListItemRoot,
                  selected: classes.itemSelected,
                }}>
                View Recommendations
              </MenuItem>
              <Divider classes={{root: classes.dividerRoot}} />
              <MenuItem
                button
                onClick={logOut}
                classes={{
                  root: classes.logoutButtonMenuListItem,
                  selected: classes.itemSelected,
                }}>
                Log Out
              </MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </Grid>
  );
}
