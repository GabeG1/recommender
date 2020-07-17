import React from 'react';
import './SearchBar.css';
import * as Styles from './SearchBarStyles';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { blue, red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
 root: {
  display: 'flex',
  //padding: 5,
 // margin: 5,
  justifyContent: 'center',
  //alignItems: 'center',
  //alignContent: 'center',
 },
 select: {
  //marginLeft: '200px',
  display: 'flex',
  //justifyContent: 'center',
  width: 150,
  padding: 20,
  justifyContent: 'center',
  textAlign: 'center',
  //color: 'blue',
  backgroundColor: 'rgba(212, 228, 235, 0.911)',
  borderRadius: 5,
 },
  paper: {
    padding: '2px 4px',
    display: 'inline-flex',
    //alignItems: 'center',
    width: 400,
    marginLeft: 20,
   // margin: '0 auto',
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
  nativeInput: {
    //padding: 200,
    backgroundColor: 'rgba(212, 228, 235, 0.911)',
    borderRadius: 5,
    textAlign: 'center',
   // marginRight: 20,
    //width: 200,
    padding: '15px 20px',
    color: 'rgba(58, 173, 194, 0.925)',
   justifyContent: 'center',
  },
  iconOpen: {
    color: red,
  },
  dropDown: {
    backgroundColor: 'rgba(212, 228, 235, 0.911)',
  }
}));



export function SearchBar(props) {
const classes = useStyles();
function handleButtonClick(e) {
  if(e.keyCode === 13){
    props.search(category, e.target.value);
 }
}
function searchOnPress(e) {
  console.log(category);
  props.search(category, e.currentTarget.parentNode.querySelector('[aria-label="search"]').value);
}

const [category, setCategory] = React.useState('video game');

const categorySelection = (event) => {
  setCategory(event.target.value);
};

  return (
    <div  className={classes.root}>
    <Select
    classes= {{
      root: classes.nativeInput,
      //select: classes.select,
      nativeInput: classes.nativeInput,
     // icon: classes.dropDown,
     // iconOpen: classes.iconOpen,
    }}
          native
          //className={classes.select}
          //defaultValue='video game'
          value={category}
          disableUnderline={true} 
          //variant='outlined'
          onChange={categorySelection}
          label="Category"
        >
          <option value={'video game'}>Video Game</option>
          <option value={'movie'}>Movie</option>
        </Select>

    <Paper className={classes.paper} 
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
    </div>
    );
}