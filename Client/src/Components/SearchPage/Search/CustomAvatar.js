import React, {Component} from 'react';
import {IconButton, MenuItem, Menu} from '@material-ui/core';

export default class CustomAvatar extends Component {
  constructor(props) {
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      menuAnchor: null,
    };
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      this.props.src != nextProps.src ||
      this.props.size != nextProps.size ||
      this.props.onClick != nextProps.onClick ||
      this.state.menuAnchor != nextState.menuAnchor
    );
  }
  handleMenu(event) {
    {
      console.log('opened');
    }
    console.log(
      event.currentTarget.querySelector(
        '[aria-label="account of current user"]'
      )
    );
    this.setState({
      menuAnchor: event.currentTarget,
    });
  }

  handleClose() {
    console.log('left');
    this.setState({
      menuAnchor: null,
    });
  }

  render() {
    const {src, size, onClick, style} = this.props;
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

    Object.assign(newStyle, style);
    return (
      <div>
        <IconButton
          style={newStyle}
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onMouseOver={this.handleMenu}
        />
        <Menu
          id='menu-appbar'
          anchorEl={this.state.menuAnchor}
          keepMounted
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={Boolean(this.state.menuAnchor)}
          onClose={this.handleClose}
          onMouseLeave={this.handleClose}>
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>View Recommendations</MenuItem>
        </Menu>
      </div>
    );
  }
}
