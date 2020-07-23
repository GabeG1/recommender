import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

export default function UserRating(props) {
  const [value, setValue] = React.useState(null);
  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography component="legend"></Typography>
      <Rating
        name={props.id}
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
