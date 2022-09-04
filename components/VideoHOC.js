import React from 'react';
import { useAutoPlay } from '../hooks/autoPlayVideo';

export const withAutoPlayHook = (Component) => {
  return (props) => {
    const screenWidth = useAutoPlay();

    return <Component width={screenWidth} {...props} />;
  };
};