import React from 'react';
import './SearchBar.css';
import * as Styles from './SearchBarStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';

export class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    if(e.keyCode == 13){
      this.props.search(e.target.value);
   }
  }

  handleMenuClick(e) {
 
  }

  render() {
  
  return (
  <div>
      <Styles.SearchButtonStyled placeholder="search"
      InputProps={{type: 'search', disableUnderline: true,
      endAdornment: (
        <InputAdornment position="end">
          <Search />
        </InputAdornment>
      )
    }}
    onKeyDown={this.handleButtonClick}
      >
      </Styles.SearchButtonStyled>
      
  </div>
    );
}
}