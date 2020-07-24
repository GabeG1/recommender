import React from 'react';
import { CustomCard } from '../Styles/CustomCard';

export function Song(props) {
  console.log('Song called');
  console.log(props.song.title);
  return (
    <CustomCard
      id={props.song.id}
      title={`${props.song.title} | ${props.song.artist}`}
      subtitle={props.song.releaseDate}
      image={props.song.image}
    />
  );
}
