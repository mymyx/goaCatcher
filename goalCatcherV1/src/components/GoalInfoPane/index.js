import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Label } from 'teaset';
import loginbackground from '../../images/loginbackground.png';
import { pxToDp } from '../../utils/stylesKits';

const StatusItem = ({ label, value = 0 }) => {
  return (
    <View style={styles.statusItemContainer}>
      <Label text={label} />
      <Label text={value || 0} style={styles.statusItemValue} />
    </View>
  );
};

const GoalInfoStatus = ({ data, hideFavorite }) => {
  const { status, favorites, likes } = data || {};
  const paddingHSize = pxToDp(12);
  const hideFavoritePaddingHSize = pxToDp(50);
  return (
    <View
      style={[
        styles.infoRowContainer,
        {
          paddingHorizontal: hideFavorite
            ? hideFavoritePaddingHSize
            : paddingHSize,
        },
      ]}>
      <StatusItem label="Status" value={status} />
      {hideFavorite ? null : <StatusItem label="Favorites" value={favorites} />}
      <StatusItem label="Likes" value={likes} />
    </View>
  );
};

const GrayRow = ({ title }) => {
  return (
    <View style={styles.grayRowContainer}>
      <Label text={title} style={styles.grayRowLabel} />
    </View>
  );
};

const GoalInfoDescription = ({ description }) => {
  return (
    <View style={styles.descriptionContainer}>
      <Label
        text={description || '--'}
        numberOfLines={0}
        style={styles.descriptionLabel}
      />
    </View>
  );
};

const GoalInfoPane = ({ goalInfoStatusData, hideFavorite, description }) => {
  return (
    <ImageBackground source={loginbackground} style={styles.background}>
      <GoalInfoStatus data={goalInfoStatusData} hideFavorite={hideFavorite} />
      <GrayRow title="Description" />
      <GoalInfoDescription description={description} />
      <GrayRow title="Update Records" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {},
  infoRowContainer: {
    flexDirection: 'row',
    // paddingHorizontal: pxToDp(12),
  },
  statusItemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: pxToDp(20),
    paddingBottom: pxToDp(12),
  },
  statusItemValue: {
    marginTop: pxToDp(15),
  },
  grayRowContainer: {
    paddingHorizontal: pxToDp(20),
    paddingVertical: pxToDp(5),
    backgroundColor: '#C4C4C4',
  },
  grayRowLabel: {
    fontWeight: 'bold',
  },
  descriptionContainer: {
    paddingHorizontal: pxToDp(20),
  },
  descriptionLabel: {
    paddingVertical: pxToDp(8),
  },
});

export default GoalInfoPane;
