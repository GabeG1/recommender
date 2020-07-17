import React from 'react';
import './SearchBar.css';
import * as Styles from './SearchBarStyles';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: '0 auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));



export function SearchBar(props) {
const classes = useStyles();
function handleButtonClick(e) {
  if(e.keyCode === 13){
    props.search(e.target.value);
 }
}
function searchOnPress(e) {
  props.search(e.currentTarget.parentNode.querySelector('[aria-label="search"]').value);
}

  return (
    <Paper className={classes.root} 
   elevation={5}>
     
      <InputBase
      autoFocus={true}
        type="search"
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        onKeyDown={handleButtonClick}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="submit" className={classes.iconButton} aria-label="search"
      onClick={searchOnPress}
      >
        <SearchIcon />
        </IconButton>
    </Paper>
    );
}