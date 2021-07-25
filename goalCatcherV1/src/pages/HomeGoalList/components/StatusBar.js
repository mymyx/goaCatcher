import React from 'react';
import { View, Platform } from 'react-native';
import { StatusBar } from 'react-native';

const HomeStatusBar = () => {
  return (
    <View
      style={{
        height: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
        width: '100%',
        backgroundColor: 'white',
      }}
    />
  );
};

export default HomeStatusBar;
