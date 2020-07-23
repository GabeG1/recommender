import React from 'react';
import { CustomCard } from '../Styles/CustomCard';

export function VideoGame(props) {
  return (
    <CustomCard
      id={props.game.id}
      title={props.game.name}
      subtitle={props.game.description}
      image={props.game.image}
    />
  );
}
