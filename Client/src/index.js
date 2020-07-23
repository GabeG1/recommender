import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';
import RingLoader from 'react-spinners/RingLoader';
//hello
export const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();

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

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
