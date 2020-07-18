import React from 'react';
import './SearchBar.css';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
 select: {
  backgroundColor: 'rgba(212, 228, 235, 0.7)',
  borderRadius: 5,
  width: 100,
  padding: '10px 15px',
  height: 35,
  display: 'block',
  textAlign: 'center',
  position: 'static',
  '&.MuiInput-input': {
    margin: '0 auto',
    display: 'inline-block',
    textAlign: 'center',
  },
  margin: '0 auto',
  //padding: '15px 20px',
  color: 'rgba(58, 173, 194, 0.925)',
 '&:focus': {
  backgroundColor: 'rgba(212, 228, 235, 1)',
  borderRadius: 5,
},

 },
  paper: {
    padding: '2px 4px',
    display: 'inline-flex',
    width: 400,
    marginLeft: 20,
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
  iconOpen: {
    color: 'red',
  },
  divContainer: {
    backgroundColor: 'black',
    display: 'block',
    textAlign: 'center'
  },
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
    <div>
    <Select
    classes= {{
      select: classes.select,
    }}
    SelectDisplayProps={{className: 
      classes.divContainer}}
          native
          value={category}
          disableUnderline={true} 
          onChange={categorySelection}
          label="Category"
        >
        
          <option value={'video game'}>Video Game</option>
          <option value={'movie'}>Movie</option>
          <option value={'song'}>Song</option>
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