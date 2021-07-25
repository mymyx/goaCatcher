import React from 'react';
import { ScrollView } from 'react-native';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import loginbackground from '../../images/loginbackground.png';
import { pxToDp } from '../../utils/stylesKits';

const Loginlayout = ({ children, title }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={loginbackground} style={styles.background}>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.contentContainer}>{children}</View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    paddingTop: pxToDp(135),
    paddingBottom: pxToDp(70),
  },
  title: {
    opacity: 1,
    color: '#FD6D04',
    fontSize: 50,
    textAlign: 'center',
  },
  contentContainer: {
    paddingHorizontal: pxToDp(45),
  },
});

export default Loginlayout;
