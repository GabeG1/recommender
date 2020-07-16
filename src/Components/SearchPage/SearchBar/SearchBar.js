import React from 'react';
import './SearchBar.css';
import * as Styles from './SearchBarStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';

export class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.searchOnPress = this.searchOnPress.bind(this);
    this.updateSearchBarValue = this.updateSearchBarValue.bind(this);
    this.state = {
      searchBar: ''
    }
  }

  handleButtonClick(e) {
    if(e.keyCode === 13){
      this.props.search(e.target.value);
   }
  }
  searchOnPress(e) {
    this.props.search(this.state.searchBar);
  }
  handleMenuClick(e) {
 
  }
  searchFocus() {
    return <Divider orientation="vertical" flexItem />
  }
  updateSearchBarValue(e) {
    //hi
    this.setState({
      searchBar: e.target.value
    })
  }
  render() {
  
  return (
  <div>
    <FormControl>
      <Styles.SearchBarStyled placeholder="search" onChange={this.updateSearchBarValue}
      InputProps={{type: 'search', disableUnderline: true, autoFocus: true,
      endAdornment: (
        <div>
        <InputAdornment position="end">
        <Divider orientation="vertical"/>
        </InputAdornment>
        <InputAdornment position="end">
        <IconButton type="submit" aria-label="search" onClick={this.searchOnPress}>
          <Search />
        </IconButton>
        </InputAdornment>
        </div>
      )
    }}
    onKeyDown={this.handleButtonClick}
      >
      </Styles.SearchBarStyled>
      </FormControl>
  </div>
    );
}
}