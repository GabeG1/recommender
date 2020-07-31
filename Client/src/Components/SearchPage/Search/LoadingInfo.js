import React, {useRef, useEffect} from 'react';
import {usePromiseTracker} from 'react-promise-tracker';
import RingLoader from 'react-spinners/RingLoader';

export const LoadingIndicator = (props) => {
  const {promiseInProgress} = usePromiseTracker();

  const componentIsMounted = useRef(true);
  useEffect(() => {
    return () => {
      console.log('finished loading');
      componentIsMounted.current = false;
    };
  }, []);

  return (
    promiseInProgress && (
      <div
        style={{
          width: '100%',
          height: '100',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          marginBottom: 50,
        }}>
        <RingLoader color='#ffffff' height='100' width='100' />
      </div>
    )
  );
};
