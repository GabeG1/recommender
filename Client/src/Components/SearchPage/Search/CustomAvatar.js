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
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
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
    fontSize: 14.4,
    fontWeight: 600,
    textDecorationColor: 'rgba(0, 0, 0, 0.6)',
    textSizeAdjust: '100%',
    fontStretch: '100%',
    padding: '15px 10px',
    '&:hover': {
      backgroundColor: 'rgba(122, 210, 220, 0.76)',
    },
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
        borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
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
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [arrowRef, setArrowRef] = React.useState(null);
  //const arrowRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

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
    <div>
      <Badge
        overlap='circle'
        classes={{
          badge: classes.badge,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant='dot'>
        <IconButton
          style={newStyle}
          ref={anchorRef}
          aria-label='account of current user'
          aria-controls={open ? 'menu-appbar' : undefined}
          aria-haspopup='true'
          onMouseEnter={handleToggle}
        />
      </Badge>
      <Popper
        open={open}
        className={classes.popper}
        anchorEl={anchorRef.current}
        role={undefined}
        placement={'bottom'}
        transition
        modifiers={{
          arrow: {
            enabled: true,
            element: arrowRef,
          },
        }}
        onMouseLeave={handleClose}
        disablePortal>
        <span className={classes.arrow} ref={setArrowRef} />
        <Paper classes={{root: classes.paperRoot}}>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList id='menu-appbar' classes={{root: classes.menuListRoot}}>
              <MenuItem
                button
                onClick={handleClose}
                classes={{
                  root: classes.menuListItemRoot,
                  selected: classes.itemSelected,
                }}>
                Profile
              </MenuItem>
              <Divider classes={{root: classes.dividerRoot}} />
              <MenuItem
                button
                onClick={handleClose}
                classes={{
                  root: classes.menuListItemRoot,
                  selected: classes.itemSelected,
                }}>
                My account
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
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </div>
  );
}
