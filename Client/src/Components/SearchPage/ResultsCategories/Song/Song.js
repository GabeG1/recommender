import React from 'react';
import { CustomCard } from '../Styles/CustomCard';

export function Song(props) {
  return (
    <CustomCard
      id={props.song.id}
      title={`${props.song.title} | ${props.song.artist}`}
      subtitle={props.song.releaseDate}
      image={props.song.image}
    />
  );
}
