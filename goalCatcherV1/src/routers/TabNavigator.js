import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeGoalList from '../pages/HomeGoalList';
import MyProfile from '../pages/MyProfile';
import SearchUser from '../pages/SearchUser';
import theme from '../theme/default';
import { pxToDp } from '../utils/stylesKits';
import myGoalsIcon from '../images/myGoals.png';
import myGoalsActiveIcon from '../images/myGoalsActive.png';
import homeIcon from '../images/homeIcon.png';
import homeIconActive from '../images/homeIconActive.png';
import homeSearchIcon from '../images/home-search.png';
import homeSearchActiveIcon from '../images/home-search-active.png';

const Tab = createBottomTabNavigator();

const TabIcon = ({ source }) => {
  const size = pxToDp(26);
  return (
    <Image
      resizeMode="contain"
      source={source}
      style={{ width: size, height: size }}
    />
  );
};
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: theme.primaryColor,
      inactiveTintColor: 'gray',
      tabStyle: {
        paddingBottom: 3,
      },
    }}>
    <Tab.Screen
      name="HomeGoalList"
      component={HomeGoalList}
      options={{
        tabBarLabel: 'What’s Up',
        tabBarIcon: ({ focused }) => {
          const source = focused ? homeIconActive : homeIcon;
          return <TabIcon source={source} />;
        },
      }}
    />
    <Tab.Screen
      name="MyProfile"
      component={MyProfile}
      initialParams={{ hideLogout: false, showBack: false }}
      options={{
        tabBarLabel: 'My Goals',
        tabBarIcon: ({ focused }) => {
          const source = focused ? myGoalsActiveIcon : myGoalsIcon;
          return <TabIcon source={source} />;
        },
      }}
    />
    <Tab.Screen
      name="SearchUser"
      component={SearchUser}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ focused }) => {
          const source = focused ? homeSearchActiveIcon : homeSearchIcon;
          return <TabIcon source={source} />;
        },
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
