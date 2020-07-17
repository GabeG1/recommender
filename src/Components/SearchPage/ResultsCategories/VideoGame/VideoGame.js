import React from 'react';
import { CustomCard } from '../Styles/CustomCard';

 export function VideoGame(props) {

        return (    
          <CustomCard
          title={props.game.name}
          subtitle={props.game.description}
          image={
            props.game.image
          } />  
        )  
  }
