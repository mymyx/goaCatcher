import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Label } from 'teaset';
import silverIcon from '../../images/Silver.png';
import goldIcon from '../../images/Gold.png';
import bronzeIcon from '../../images/bronze.png';
import warmHeartedIcon from '../../images/warm-hearted.png';
import { pxToDp } from '../../utils/stylesKits';

const icons = {
  silver: silverIcon,
  gold: goldIcon,
  bronze: bronzeIcon,
  warmHearted: warmHeartedIcon,
};

const Icon = ({ type }) => {
  return <Image source={icons[type]} style={styles.icon} resizeMode="cover" />;
};

const GoldDartAmount = ({ type, value }) => {
  return (
    <View style={styles.item}>
      <Icon type={type} />
      <Label text={value || '0'} size="lg" style={styles.itemLabel} />
    </View>
  );
};

const UserGoldDart = ({ data }) => {
  const { gold, silver, bronze, warmHearted } = data || {};
  return (
    <View style={styles.container}>
      <GoldDartAmount type="gold" value={gold} />
      <GoldDartAmount type="silver" value={silver} />
      <GoldDartAmount type="bronze" value={bronze} />
      <GoldDartAmount type="warmHearted" value={warmHearted} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: pxToDp(21),
    height: 18,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLabel: {
    paddingHorizontal: pxToDp(8),
    fontWeight: 'bold',
  },
});

export default UserGoldDart;
