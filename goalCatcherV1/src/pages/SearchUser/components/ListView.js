import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Label } from 'teaset';
import UserRowItem from '../../../components/UserRowItem';

const ListView = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Label text={`${data.length} Result(s)`} style={styles.headerTitle} />
      </View>
      <View style={styles.listContainer}>
        {data.map((item, index) => {
          return <UserRowItem key={`${index}`} {...item} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    marginLeft: 12,
    marginRight: 22,
    paddingBottom: 6,
    borderBottomColor: '#979797',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontWeight: 'bold',
  },
  listContainer: {},
});

export default ListView;
