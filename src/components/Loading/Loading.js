import React from 'react';
import Lottie from 'lottie-react-native';

export function Loading() {
  return <Lottie source={require('../../assets/loading.json')} autoPlay />;
}
