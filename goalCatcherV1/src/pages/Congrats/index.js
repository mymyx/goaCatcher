import React from 'react';
import { View, ImageBackground, StyleSheet, Image } from 'react-native';
import { Label, Button } from 'teaset';
import { useRoute, useNavigation } from '@react-navigation/native';
import bgImg from '../../images/loginbackground.png';
import theme from '../../theme/default';
import { pxToDp } from '../../utils/stylesKits';
import silverIcon from '../../images/Silver.png';
import goldIcon from '../../images/Gold.png';
import bronzeIcon from '../../images/bronze.png';
import warmHeartedIcon from '../../images/warm-hearted.png';
import NavigationBar from '../../components/NavigationBar';

const getSource = type => {
  const sources = {
    silver: silverIcon,
    gold: goldIcon,
    bronze: bronzeIcon,
    pink: warmHeartedIcon,
  };
  return sources[type];
};

const getCongatsData = type => {
  return {
    label: `Wow! \n You was awarded a ${type} \n dart for this \n achievement!`,
    source: getSource(type),
  };
};

const Congats = () => {
  const { params } = useRoute();
  const { type = 'silver' } = params || {};
  // const type = 'silver';
  const { label, source } = getCongatsData(type);
  const navigation = useNavigation();
  return (
    <View styles={{ flex: 1 }}>
      <NavigationBar title="Congrats!" />
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.contentContainer}>
          <Label
            text={label}
            numberOfLines={0}
            style={styles.contentLabel}
            size="xl"
          />
          <Image
            source={source}
            resizeMode="contain"
            style={styles.sourceImg}
          />
          <Button
            title="Back"
            type="primary"
            style={styles.backButton}
            onPress={navigation.goBack}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentLabel: {
    textAlign: 'center',
    color: theme.primaryColor,
    marginTop: pxToDp(80),
  },
  sourceImg: {
    // width: '50%',
    height: pxToDp(150),
    // backgroundColor: 'red',
    marginTop: pxToDp(50),
  },
  backButton: {
    marginTop: pxToDp(50),
    width: pxToDp(200),
    height: pxToDp(40),
    borderRadius: pxToDp(100),
  },
});

export default Congats;
