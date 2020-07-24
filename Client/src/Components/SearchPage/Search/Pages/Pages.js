import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router-dom';
import { PaginationItem } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  container: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  pageRoot: {
    //backgroundColor: 'green',
    color: 'black',
    backgroundColor: 'rgba(208, 189, 93, 0.85)',
    boxShadow: '0.5px 0.5px rgb(129, 131, 141)',
  },
}));
export default function Pages(props) {
  const classes = useStyles();
  console.log(classes.pageRoot);
  let history = useHistory();
  function handleChange(event, page) {
    props.onPageChange(page, history);
  }
  return (
    <div className={classes.container}>
      <Box visibility={props.showPages}>
        <Pagination
          page={Number(props.offset)}
          count={Math.floor(props.total / 20)}
          showFirstButton
          showLastButton
          size="large"
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              classes={{
                page: classes.pageRoot,
              }}
            />
          )}
        />
      </Box>
    </div>
  );
}
