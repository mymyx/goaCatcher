import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationBar as TNavigationBar } from 'teaset';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import BackIcon from '../../images/BackIcon.png';
import { pxToDp } from '../../utils/stylesKits';
import { StatusBar } from 'react-native';

const BACK_SIZE = pxToDp(24);

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        padding: pxToDp(10),
      }}>
      <Image
        source={BackIcon}
        style={{ width: BACK_SIZE, height: BACK_SIZE }}
      />
    </TouchableOpacity>
  );
};

const NavigationBar = props => {
  const { style, hideBack, ...others } = props;
  const navigation = useNavigation();

  useFocusEffect(() => {
    StatusBar.setBarStyle('dark-content');
  });

  return (
    <TNavigationBar
      {...others}
      statusBarStyle="default"
      leftView={
        hideBack ? undefined : <BackButton onPress={navigation.goBack} />
      }
      style={StyleSheet.flatten([styles.container, style || {}])}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
});

export default NavigationBar;
