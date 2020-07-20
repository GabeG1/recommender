import React from 'react';
import './SearchBar.css';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from '@material-ui/core';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  categoryItem: {
    //justifyContent: 'center',
    alignSelf: 'center',
    display: 'inherit',
    [breakpoints.up('md')]: { 
      flexWrap: 'no-wrap',
     
    },
    [breakpoints.up('xs')]: { 
      justifyContent: 'center',
      flexWrap: 'wrap',
    },  
    [breakpoints.up('sm')]: { 
      justifyContent: 'flex-end',
      lexWrap: 'no-wrap',
    },
  },
    searchItem: {
      //
      display: 'inherit',
      [breakpoints.up('md')]: { 
        flexWrap: 'no-wrap',
       
      },
      [breakpoints.up('xs')]: { 
      justifyContent: 'center',
       flexWrap: 'wrap',
      },  
      [breakpoints.up('sm')]: { 
        justifyContent: 'flex-start',
        flexWrap: 'no-wrap',
      },
  }
}))

const useStyles = makeStyles((theme) => ({
  select: {
    backgroundColor: 'rgba(212, 228, 235, 0.7)',
    borderRadius: 5,
    width: 100,
    padding: '10px 15px',
    height: 35,
    color: 'rgba(58, 173, 194, 0.925)',
    '&:focus': {
      backgroundColor: 'rgba(212, 228, 235, 1)',
      borderRadius: 5,
    },

  },
  paper: {
    display: 'flex',
    padding: '2px 4px 2px 10px',
   
    flexWrap: 'nowrap',
  },
  input: {
    width: '50vw',
    maxWidth: "300px",
    display: 'flex',
    flexBasis: '50%',
    flexGrow: 1,
    marginLeft: theme.spacing(1.5),
    
  },
  iconButton: {
    paddingLeft: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  iconOpen: {
    color: 'red',
  },
}));



export function SearchBar(props) {
  const classes = useStyles();
  const gridStyles = useGridStyles();
  function handleButtonClick(e) {
    if (e.keyCode === 13) {
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

    <Grid container justify='center' spacing={3} classes={{container: gridStyles.container}}>
      <Grid item classes={{item: gridStyles.categoryItem}} xs={12} sm={4}>
        <Select
          classes={{
            select: classes.select,
          }}
          native
          value={category}
          disableUnderline={true}
          onChange={categorySelection}
          label="Category">

          <option value={'video game'}>Video Game</option>
          <option value={'movie'}>Movie</option>
          <option value={'song'}>Song</option>
        </Select>
      </Grid>
      <Grid item xs={12} sm={8} classes={{item: gridStyles.searchItem}}>
        <Paper classes={{root: classes.paper}}
          elevation={5}>
          <InputBase
            autoFocus={true}
            type="search"
            classes={{input: classes.input}}
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
      </Grid>
    </Grid>
  );
}