import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from "./pages/account/login/index";
import Login from "./pages/account/login/accountLogin";
import Demo from "./pages/Demo";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
// 创建页面栈
const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      {/* 默认注册界面 */}
      <Stack.Navigator headerMode="none" initialRouteName="Signup">
        <Stack.Screen name="Sign up" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Demo" component={Demo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;