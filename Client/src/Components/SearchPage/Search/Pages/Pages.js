import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function Pages(props) {
  const classes = useStyles();
  let history = useHistory();
  function handleChange(event, page) {
    props.onPageChange(page, history);
  }
  return (
    <div className={classes.root}>
      <Box visibility={props.showPages}>
        <Pagination
          page={Number(props.offset)}
          count={Math.floor(props.total / 20)}
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </Box>
    </div>
  );
}
