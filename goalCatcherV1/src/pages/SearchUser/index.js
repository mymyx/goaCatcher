import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import AffixBaseContainer from '../../components/AffixBaseContainer';
import bgImg from '../../images/loginbackground.png';
import UserSearch from '../../components/UserSearch';
import HomeStatusBar from '../../pages/HomeGoalList/components/StatusBar';
import { searchUser as fetchSearchUser } from '../../services/user';
import ListView from './components/ListView';

const SearchUser = () => {
  const [userList, setUserList] = useState([]);

  const onSubmit = searchValue => {
    fetchSearchUser(searchValue).then(({ data }) => {
      setUserList(data);
    });
  };

  return (
    <AffixBaseContainer>
      <ImageBackground source={bgImg} style={styles.imageBackground}>
        <HomeStatusBar />
        <UserSearch onSubmit={onSubmit} />
        <ListView data={userList} />
      </ImageBackground>
    </AffixBaseContainer>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
  },
});

export default SearchUser;
