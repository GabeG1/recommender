import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function Pages(props) {
  const classes = useStyles();

  function handleChange(event, page) {
    console.log(page);
    props.onPageChange(page - 1);
  }
  return (
    <div className={classes.root}>
      {console.log('hey')}
      <Box visibility={props.showPages}>
        <Pagination
          page={props.offset + 1}
          count={Math.floor(props.total / 20)}
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </Box>
    </div>
  );
}
