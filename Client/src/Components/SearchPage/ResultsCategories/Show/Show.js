import React from 'react';
import {CustomCard} from '../Styles/CustomCard';

export function Show(props) {
  return (
    <CustomCard
      id={props.show.id}
      title={props.show.title}
      subtitle={props.show.description}
      image={props.show.image}
    />
  );
}
