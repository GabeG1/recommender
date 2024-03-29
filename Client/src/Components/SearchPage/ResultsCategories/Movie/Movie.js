import React from 'react';
import {CustomCard} from '../Styles/CustomCard';

export function Movie(props) {
  return (
    <CustomCard
      id={props.movie.id}
      title={props.movie.title}
      subtitle={props.movie.description}
      image={props.movie.image}
    />
  );
}
