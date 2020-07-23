import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';

const { promiseInProgress } = usePromiseTracker();
function isLoading() {
  return true;
}

export function LoadingInfo() {
  return isLoading();
}
