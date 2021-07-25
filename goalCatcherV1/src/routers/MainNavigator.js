import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import GoalDetail from '../pages/GoalDetail';
import Congrats from '../pages/Congrats';
import GoalCreate from '../pages/GoalCreate';
import GoalUpdate from '../pages/GoalUpdate';
import UserProfile from '../pages/UserProfile';
import MyProfile from '../pages/MyProfile';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="TabNavigator" headerMode={null}>
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="GoalDetail" component={GoalDetail} />
    <Stack.Screen name="Congrats" component={Congrats} />
    <Stack.Screen name="GoalCreate" component={GoalCreate} />
    <Stack.Screen name="GoalUpdate" component={GoalUpdate} />
    <Stack.Screen name="UserProfile" component={UserProfile} />
    <Stack.Screen
      name="MyProfile"
      component={MyProfile}
      initialParams={{ hideLogout: true, showBack: true }}
    />
  </Stack.Navigator>
);

export default MainNavigator;
