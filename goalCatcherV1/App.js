import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Theme, TopView } from 'teaset';
import Nav from './src/nav';
import themeDefault from './src/theme/default';
import SplashScreen from 'react-native-splash-screen';

Theme.set(themeDefault);

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <TopView>
        <Nav></Nav>
      </TopView>
    );
  }
}

export default App;
