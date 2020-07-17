import React from 'react';
import {CustomCard} from '../Styles/CustomCard';

 export function Movie(props) {
        return (    
          <CustomCard
          title={props.movie.title}
          subtitle={props.movie.year}
          image={
            props.movie.image
          }/>  
        )  
  }
