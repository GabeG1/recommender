import React, { useRef, useEffect } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import RingLoader from 'react-spinners/RingLoader';

export const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  const componentIsMounted = useRef(true);
  useEffect(() => {
    return () => {
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
        }}
      >
        <RingLoader color="#BF69D8" height="100" width="100" />
      </div>
    )
  );
};
