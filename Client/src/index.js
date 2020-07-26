import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';
import RingLoader from 'react-spinners/RingLoader';

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
